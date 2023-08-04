import supabase from "./supabase";

const list = async (req, res) => {
    try { 
        const { data: users, error } = await supabase
            .from('users')
            .select('*')
        if (error) {
            return res.json(error)
        }

        res.json(users)
    } catch (error) {
        return res.json(error)
    }    
}

export default list;