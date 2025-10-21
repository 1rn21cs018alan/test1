import { createClient } from '@supabase/supabase-js';

// Use the Service Role Key for elevated, server-side access
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY; 

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Vercel serverless function entry point
export default async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('items')
      .select('name, price')
      .limit(2);

    if (error) throw error;

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
