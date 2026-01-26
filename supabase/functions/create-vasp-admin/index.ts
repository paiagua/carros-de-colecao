import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Create the new vasp admin user
    const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email: "admin@vasp.pt",
      password: "vasp@2024",
      email_confirm: true,
    });

    if (createError && !createError.message.includes("already been registered")) {
      throw createError;
    }

    let vaspUserId = newUser?.user?.id;

    // If user already exists, get their ID
    if (!vaspUserId) {
      const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
      const vaspUser = existingUsers?.users?.find(u => u.email === "admin@vasp.pt");
      vaspUserId = vaspUser?.id;
    }

    // Assign vasp_admin role to the new user
    if (vaspUserId) {
      const { error: roleError } = await supabaseAdmin
        .from("user_roles")
        .upsert({ user_id: vaspUserId, role: "vasp_admin" }, { onConflict: "user_id,role" });
      
      if (roleError) {
        console.error("Error assigning vasp_admin role:", roleError);
      }
    }

    // Get the existing admin@carros user and assign admin role
    const { data: allUsers } = await supabaseAdmin.auth.admin.listUsers();
    const carrosAdmin = allUsers?.users?.find(u => u.email === "admin@carros");
    
    if (carrosAdmin?.id) {
      const { error: adminRoleError } = await supabaseAdmin
        .from("user_roles")
        .upsert({ user_id: carrosAdmin.id, role: "admin" }, { onConflict: "user_id,role" });
      
      if (adminRoleError) {
        console.error("Error assigning admin role:", adminRoleError);
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "VASP admin created and roles assigned",
        vaspEmail: "admin@vasp.pt",
        vaspPassword: "vasp@2024"
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});