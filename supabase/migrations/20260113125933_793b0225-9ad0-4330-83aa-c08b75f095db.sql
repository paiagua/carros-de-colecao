-- Create leads table to store subscription form data
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Step 1: Personal data
  full_name TEXT,
  email TEXT,
  phone TEXT,
  marketing_consent BOOLEAN DEFAULT false,
  
  -- Step 2: First book choice
  first_book TEXT,
  
  -- Step 3: Delivery address
  address TEXT,
  door_number TEXT,
  floor TEXT,
  postal_code_1 TEXT,
  postal_code_2 TEXT,
  city TEXT,
  
  -- Step 4: Payment details
  nib TEXT,
  account_holder_name TEXT,
  account_holder_address TEXT,
  account_holder_postal_code_1 TEXT,
  account_holder_postal_code_2 TEXT,
  account_holder_city TEXT,
  terms_accepted BOOLEAN DEFAULT false,
  
  -- Tracking fields
  current_step INTEGER NOT NULL DEFAULT 1,
  completed BOOLEAN NOT NULL DEFAULT false,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (anyone can create a lead)
CREATE POLICY "Anyone can create leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for public update (anyone can update their lead by ID)
CREATE POLICY "Anyone can update leads" 
ON public.leads 
FOR UPDATE 
USING (true);

-- Create policy to allow reading all leads (for backoffice - will be protected by auth later)
CREATE POLICY "Anyone can read leads" 
ON public.leads 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_leads_updated_at
BEFORE UPDATE ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.update_leads_updated_at();

-- Create indexes for better performance
CREATE INDEX idx_leads_current_step ON public.leads(current_step);
CREATE INDEX idx_leads_completed ON public.leads(completed);
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_email ON public.leads(email);