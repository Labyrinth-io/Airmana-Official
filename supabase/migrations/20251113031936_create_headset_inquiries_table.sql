/*
  # Create headset_inquiries table for lead collection

  1. New Tables
    - `headset_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Customer's full name
      - `email` (text) - Customer's email address
      - `phone` (text) - Customer's phone number
      - `event_date` (date) - Date when the headsets are needed
      - `duration` (text) - Rental duration (4 Hours, 1 Day, etc.)
      - `number_of_headsets` (integer) - Number of headsets requested (1-20)
      - `event_type` (text) - Type of event (Fitness Class, Workshop, etc.)
      - `event_details` (text) - Additional details and special requirements
      - `created_at` (timestamptz) - When the inquiry was submitted

  2. Security
    - Enable RLS on `headset_inquiries` table
    - Add policy for public users to insert their own inquiries
    - Add policy for authenticated users to view all inquiries (for admin access)

  3. Important Notes
    - This table allows public inserts so customers can submit quote requests
    - The number_of_headsets field has a constraint to enforce max 20 headsets
    - All fields are required except event_details which is optional
*/

CREATE TABLE IF NOT EXISTS headset_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_date date NOT NULL,
  duration text NOT NULL,
  number_of_headsets integer NOT NULL CHECK (number_of_headsets >= 1 AND number_of_headsets <= 20),
  event_type text NOT NULL,
  event_details text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE headset_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert headset inquiries"
  ON headset_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON headset_inquiries
  FOR SELECT
  TO authenticated
  USING (true);