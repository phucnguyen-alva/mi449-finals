import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://txdncsrjfejkrzagvpiy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4ZG5jc3JqZmVqa3J6YWd2cGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxOTE2MTMsImV4cCI6MjA2MDc2NzYxM30.mqJ57_CGA_BK3mTYqJjvLtVILx7W8ss0ECjgMn-oR_c'
const supabase = createClient(supabaseUrl, supabaseKey)