-- Create enum for app roles
CREATE TYPE public.app_role AS ENUM ('admin', 'vasp_admin');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Policy to allow authenticated users to read their own roles
CREATE POLICY "Users can read own roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (user_id = auth.uid());

-- Security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Function to check if user is vasp_admin (only sees completed leads)
CREATE OR REPLACE FUNCTION public.is_vasp_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = 'vasp_admin'
  )
$$;

-- Update the leads SELECT policy to filter for vasp_admin
DROP POLICY IF EXISTS "Anyone can read leads" ON public.leads;

CREATE POLICY "Users can read leads based on role" 
ON public.leads 
FOR SELECT 
TO authenticated
USING (
  -- Full admins see all, vasp_admin only sees completed
  CASE 
    WHEN public.has_role(auth.uid(), 'admin') THEN true
    WHEN public.is_vasp_admin(auth.uid()) THEN completed = true
    ELSE false
  END
);

-- Keep public read for anonymous (form submissions need to check existing)
CREATE POLICY "Anonymous can read leads" 
ON public.leads 
FOR SELECT 
TO anon
USING (true);