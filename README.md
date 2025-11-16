# Airmana Official

A modern React application for Airmana's breathwork experiences and headset hire services.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- A Supabase account (free tier works)

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd airmana-official
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

#### Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up or log in
2. Click "New Project"
3. Fill in your project details:
   - Project name: Choose any name (e.g., "airmana")
   - Database password: Create a strong password
   - Region: Choose the closest to your users
4. Wait for your project to be created (takes about 2 minutes)

#### Get Your Supabase Credentials

1. Once your project is ready, go to **Settings** (gear icon in sidebar)
2. Click **API** in the settings menu
3. Copy the following values:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")

### 4. Configure Environment Variables

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Open `.env` and replace the placeholder values with your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 5. Set Up the Database

The project includes database migrations that need to be run on your Supabase instance.

#### Option A: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the contents of each migration file in order:
   - First: `supabase/migrations/20251113031936_create_headset_inquiries_table.sql`
   - Then: `supabase/migrations/20251113035706_update_headset_inquiries_limit.sql`
5. Click **Run** for each migration

#### Option B: Using Supabase CLI (Advanced)

If you prefer using the Supabase CLI:

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-id

# Push migrations
supabase db push
```

### 6. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
airmana-official/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── lib/            # Utility functions and configurations
│   └── App.tsx         # Main app component
├── supabase/
│   └── migrations/     # Database migration files
├── public/             # Static assets
└── .env                # Environment variables (not in git)
```

## Database Schema

The application uses the following main table:

### headset_inquiries

Stores customer inquiries for headset rentals:
- `id` - Unique identifier
- `name` - Customer name
- `email` - Customer email
- `phone` - Customer phone number
- `event_date` - Date of the event
- `duration` - Rental duration
- `number_of_headsets` - Number of headsets needed (1-200)
- `event_type` - Type of event
- `event_details` - Additional details
- `created_at` - Timestamp of submission

## Features

- Breathwork session information and booking
- Headset hire quote request system
- Events and workshops showcase
- Responsive design with Tailwind CSS
- Secure data storage with Supabase

## Tech Stack

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Supabase for backend and database
- React Router for navigation
- Lucide React for icons

## Troubleshooting

### "Invalid API key" or connection errors

- Double-check that your `.env` file exists and contains the correct values
- Ensure there are no extra spaces or quotes around the values
- Restart the development server after changing `.env`

### Database errors

- Make sure you've run all migrations in order
- Check that Row Level Security policies are properly set up
- Verify your Supabase project is active and not paused

### Build errors

Run type checking to identify issues:
```bash
npm run typecheck
```

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

All rights reserved.
