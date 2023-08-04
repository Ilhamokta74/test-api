import supabase from "./supabase";

const daftar = async (req, res) => {
    try { 
        const {username, password, role} = req.query
        const { data, error } = await supabase
            .from('login')
            .insert([
                { username, password, role },
        ])
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

export default daftar;