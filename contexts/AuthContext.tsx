import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';

import { User } from '@supabase/supabase-js';

import { supabase } from '@/lib/supabase';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider(props: AuthProviderProps) {
  const { children } = props;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    supabase.auth
      .getSession()
      .then(({ data: { session }, error }) => {
        if (error) {
          Alert.alert('Помилка', 'Не вдалося отримати сесію');
          return;
        }
        setUser(session?.user ?? null);
      })
      .catch(() => {
        Alert.alert('Помилка', 'Не вдалося отримати сесію');
        return;
      })
      .finally(async () => {
        setLoading(false);
        // Hide splash screen after auth check is complete
        await SplashScreen.hideAsync();
      });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    if (!data.session) {
      throw new Error('Failed to create session');
    }
  }

  async function signUp(email: string, password: string) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw error;
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }
  }

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth має бути використаний всередині AuthProvider');
  }

  return context;
}
