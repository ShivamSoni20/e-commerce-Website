// Supabase Configuration
// Replace these with your actual Supabase project credentials
// You can find these in your Supabase project settings: https://app.supabase.com

const SUPABASE_URL = 'https://icjnwhipnvqovnqonkcs.supabase.co'; // e.g., 'https://xxxxxxxxxxxxx.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imljam53aGlwbnZxb3ZucW9ua2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NTM5MzgsImV4cCI6MjA3NjAyOTkzOH0.O2Gi2pvSYUIR6oa1mnqfx0rv5ugOP_A5SaE2NK4qXug'; // Your public anon key

// Initialize Supabase client
// Check if supabase is loaded
if (typeof supabase === 'undefined') {
  console.error('Supabase library not loaded. Make sure the CDN script is included.');
}

const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// Authentication Functions
const auth = {
  // Sign up new user
  async signUp(email, password, fullName) {
    try {
      if (!supabaseClient) {
        throw new Error('Supabase client not initialized');
      }
      const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullName,
          }
        }
      });
      
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Sign up error:', error);
      return { success: false, error: error.message };
    }
  },

  // Sign in existing user
  async signIn(email, password) {
    try {
      if (!supabaseClient) {
        throw new Error('Supabase client not initialized');
      }
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
      });
      
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Sign in error:', error);
      return { success: false, error: error.message };
    }
  },

  // Sign out
  async signOut() {
    try {
      if (!supabaseClient) {
        throw new Error('Supabase client not initialized');
      }
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Sign out error:', error);
      return { success: false, error: error.message };
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      if (!supabaseClient) return null;
      const { data: { user } } = await supabaseClient.auth.getUser();
      return user;
    } catch (error) {
      console.error('Get user error:', error);
      return null;
    }
  },

  // Get current session
  async getSession() {
    try {
      if (!supabaseClient) return null;
      const { data: { session } } = await supabaseClient.auth.getSession();
      return session;
    } catch (error) {
      console.error('Get session error:', error);
      return null;
    }
  },

  // Reset password
  async resetPassword(email) {
    try {
      if (!supabaseClient) {
        throw new Error('Supabase client not initialized');
      }
      const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/reset-password.html',
      });
      
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Reset password error:', error);
      return { success: false, error: error.message };
    }
  },

  // Update user password
  async updatePassword(newPassword) {
    try {
      const { data, error } = await supabaseClient.auth.updateUser({
        password: newPassword
      });
      
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Update password error:', error);
      return { success: false, error: error.message };
    }
  },

  // Listen to auth state changes
  onAuthStateChange(callback) {
    if (!supabaseClient) {
      console.error('Supabase client not initialized');
      return { data: { subscription: { unsubscribe: () => {} } } };
    }
    return supabaseClient.auth.onAuthStateChange((event, session) => {
      callback(event, session);
    });
  }
};
