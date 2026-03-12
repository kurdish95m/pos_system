// js/supabase-config.js

// 1. إعدادات مشروع Supabase الخاص بك
const SUPABASE_URL =  'https://rymipwvxgbwmvsetxzjd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5bWlwd3Z4Z2J3bXZzZXR4empkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMzMzNjQsImV4cCI6MjA4ODYwOTM2NH0.1r1-67Vu__zJcQFWpxXA7JMX-Oj4GGffMyfc3JuAtVs';

// 2. إنشاء الاتصال وتخزينه في متغير ثابت (ثابت على مستوى المشروع)
// سميناه supabaseClient عشان نميزه عن المكتبة الأصلية
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("تم تهيئة الاتصال بقاعدة بيانات Supabase بنجاح!");