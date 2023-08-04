import supabase from "./supabase";

const listlogin = async (req, res) => {
    try { 
        const { data, error } = await supabase
            .from('login')
            .select('*')
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

export default listlogin;