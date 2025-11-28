/*
  # Update headset_inquiries table to allow 1-200 headsets

  1. Changes
    - Modify the check constraint on `number_of_headsets` column to allow 1-200 headsets instead of 1-20
    - This change reflects the updated business requirement for larger event support

  2. Important Notes
    - This uses ALTER TABLE to modify the existing constraint
    - The new constraint allows for significantly larger events
*/

ALTER TABLE headset_inquiries 
DROP CONSTRAINT IF EXISTS headset_inquiries_number_of_headsets_check;

ALTER TABLE headset_inquiries 
ADD CONSTRAINT headset_inquiries_number_of_headsets_check 
CHECK (number_of_headsets >= 1 AND number_of_headsets <= 200);