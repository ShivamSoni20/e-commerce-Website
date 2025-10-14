# Supabase Authentication Setup Guide

## 🚀 Quick Setup Instructions

### Step 1: Create a Supabase Account
1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" or "Sign Up"
3. Sign up with your GitHub, Google, or email account

### Step 2: Create a New Project
1. Once logged in, click "New Project"
2. Fill in the project details:
   - **Name**: MyShop (or any name you prefer)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the closest region to your users
   - **Pricing Plan**: Free tier is perfect for development
3. Click "Create new project"
4. Wait 2-3 minutes for your project to be set up

### Step 3: Get Your API Credentials
1. In your Supabase dashboard, go to **Settings** (gear icon in the left sidebar)
2. Click on **API** in the settings menu
3. You'll see two important values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")
4. Copy both of these values

### Step 4: Configure Your Project
1. Open the file `supabase-config.js` in your project
2. Replace the placeholder values:
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // Replace with your Project URL
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your anon public key
   ```
3. Save the file

### Step 5: Enable Email Authentication
1. In your Supabase dashboard, go to **Authentication** → **Providers**
2. Make sure **Email** is enabled (it should be by default)
3. Configure email settings:
   - You can use Supabase's default email service for testing
   - For production, configure your own SMTP settings

### Step 6: Configure Email Templates (Optional)
1. Go to **Authentication** → **Email Templates**
2. Customize the email templates for:
   - Confirmation email (sent when users sign up)
   - Password reset email
   - Magic link email

### Step 7: Test Your Setup
1. Open `index.html` in your browser
2. Click "Login / Sign Up" button
3. Try creating a new account
4. Check your email for the confirmation link
5. Verify your account and try logging in

## 📋 Features Included

### ✅ User Authentication
- **Sign Up**: Create new accounts with email and password
- **Login**: Authenticate existing users
- **Logout**: Securely sign out users
- **Password Reset**: Send password reset emails
- **Session Management**: Automatic session persistence

### ✅ UI Components
- Modern login/signup modal with tabs
- User dropdown menu with profile options
- Loading states and error handling
- Success/error alerts
- Responsive design

### ✅ Security Features
- Password validation (minimum 6 characters)
- Email verification
- Secure session tokens
- Protected API keys (anon key is safe for client-side)

## 🔧 Advanced Configuration

### Custom Email Templates
Edit the email templates in Supabase Dashboard → Authentication → Email Templates

### Redirect URLs
Configure allowed redirect URLs in:
- Supabase Dashboard → Authentication → URL Configuration
- Add your domain (e.g., `http://localhost:3000`, `https://yourdomain.com`)

### Social Authentication (Optional)
Enable social login providers:
1. Go to Authentication → Providers
2. Enable providers like Google, GitHub, Facebook
3. Add OAuth credentials from each provider

### Database Tables (Optional)
Create custom user profile tables:
```sql
-- Example: User profiles table
create table profiles (
  id uuid references auth.users on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  primary key (id)
);

-- Enable Row Level Security
alter table profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using ( true );

create policy "Users can insert their own profile"
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile"
  on profiles for update
  using ( auth.uid() = id );
```

## 🐛 Troubleshooting

### Issue: "Invalid API key"
- **Solution**: Double-check that you copied the correct anon public key from Supabase dashboard

### Issue: "Email not sending"
- **Solution**: Check your email provider settings in Authentication → Email
- For testing, use a real email address (not temporary email services)

### Issue: "CORS errors"
- **Solution**: Add your domain to allowed URLs in Authentication → URL Configuration

### Issue: "User not persisting after refresh"
- **Solution**: This is normal - the code checks for existing sessions on page load

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [JavaScript Client Library](https://supabase.com/docs/reference/javascript/introduction)

## 🎯 Next Steps

1. **Customize the UI**: Modify styles in `index.html` to match your brand
2. **Add User Profiles**: Create a profiles table to store additional user data
3. **Protect Routes**: Add authentication checks before checkout
4. **Store Orders**: Save user orders to Supabase database
5. **Add Social Login**: Enable Google/GitHub authentication

## 💡 Tips

- The **anon public** key is safe to use in client-side code
- Never expose your **service_role** key in client-side code
- Enable email confirmation for better security
- Use Row Level Security (RLS) policies for database tables
- Test thoroughly before deploying to production

---

**Need Help?** Check the [Supabase Discord](https://discord.supabase.com) or [GitHub Discussions](https://github.com/supabase/supabase/discussions)
