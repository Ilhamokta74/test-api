import supabase from "./supabase";

const edit = async (req, res) => {
    try { 
        const {id} = req.query
        const { data, error } = await supabase
            .from('users')
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

export default edit;