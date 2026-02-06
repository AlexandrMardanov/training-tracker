import { supabase } from './supabase';

export type WeightEntry = {
  id: string;
  user_id: string;
  weight: number;
  date: string; // ISO date format: "YYYY-MM-DD"
  created_at: string;
  updated_at: string;
};

export type WeightEntryCreate = Omit<WeightEntry, 'id' | 'created_at' | 'updated_at'>;
export type WeightEntryUpdate = Partial<Pick<WeightEntry, 'weight' | 'date'>>;

// Database operations using Supabase

export async function getWeightEntries(userId: string): Promise<WeightEntry[]> {
  const { data, error } = await supabase
    .from('weight_entries')
    .select('*')
    .eq('user_id', userId)
    .order('date', { ascending: false });

  if (error) {
    throw new Error('Помилка завантаження записів');
  }

  return data || [];
}

export async function getWeightEntry(id: string): Promise<WeightEntry | null> {
  const { data, error } = await supabase.from('weight_entries').select('*').eq('id', id).single();

  if (error) {
    if (error.code === 'PGRST116') {
      throw new Error('Запис не знайдено');
    }
    throw new Error('Помилка завантаження запису');
  }

  return data;
}

export async function addWeightEntry(data: WeightEntryCreate): Promise<WeightEntry> {
  const { data: newEntry, error } = await supabase
    .from('weight_entries')
    .insert([
      {
        user_id: data.user_id,
        weight: data.weight,
        date: data.date,
      },
    ])
    .select()
    .single();

  if (error) {
    if (error.code === '23505') {
      throw new Error('Запис з цією датою вже існує');
    }
    throw new Error('Помилка додавання запису');
  }

  return newEntry;
}

export async function updateWeightEntry(id: string, data: WeightEntryUpdate): Promise<WeightEntry> {
  const { data: updatedEntry, error } = await supabase
    .from('weight_entries')
    .update({
      ...(data.weight !== undefined && { weight: data.weight }),
      ...(data.date !== undefined && { date: data.date }),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    if (error.code === '23505') {
      throw new Error('Запис з цією датою вже існує');
    }
    if (error.code === 'PGRST116') {
      throw new Error('Запис не знайдено');
    }
    throw new Error('Помилка оновлення запису');
  }

  return updatedEntry;
}

export async function deleteWeightEntry(id: string): Promise<void> {
  const { error } = await supabase.from('weight_entries').delete().eq('id', id);

  if (error) {
    throw new Error('Помилка видалення запису');
  }
}
