const {createClient} = require('@supabase/supabase-js')

const SUPABASE_KEY = process.env.SERVICE_KEY
const SUPABASE_URL = "https://pdtbytarvxlfrkgmfaqq.supabase.co"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;