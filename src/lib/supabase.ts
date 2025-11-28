import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface HeadsetInquiry {
  name: string;
  email: string;
  phone: string;
  event_date: string;
  duration: string;
  number_of_headsets: number;
  event_type: string;
  event_details: string;
}

export async function submitHeadsetInquiry(inquiry: HeadsetInquiry) {
  const { data, error } = await supabase
    .from('headset_inquiries')
    .insert([inquiry])
    .select()
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}
