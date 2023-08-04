const {createClient} = require('@supabase/supabase-js')

//const SUPABASE_KEY = PROCESS.ENV.SUPABASE_KEY
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdGJ5dGFydnhsZnJrZ21mYXFxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NjI1NDE5MiwiZXhwIjoxOTcxODMwMTkyfQ.wrpDg8IdI9Q_Fd0Qu3xh2BVmKY8SYl7khhwfJhViIVs"
const SUPABASE_URL = "https://pdtbytarvxlfrkgmfaqq.supabase.co"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const add = async (req, res) => {
    try { 
        const {Nama, Email, Subject, Pesan} = req.query
        const { data, error } = await supabase
            .from('Message')
            .insert([
                { Nama, Email, Subject, Pesan },
        ])
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

const hapus = async (req, res) => {
    try { 
        const {id} = req.query
        const { data, error } = await supabase
            .from('Message')
            .delete()
            .eq('id', id)
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

const list = async (req, res) => {
    try { 
        const { data, error } = await supabase
            .from('Message')
            .select('*')
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

const listInti = async (req, res) => {
    try {
        const {id} = req.query
        const { data, error } = await supabase
            .from('Message')
            .select('*')
            .eq('id', id)
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

module.exports = {
    add, hapus, list, listInti
}