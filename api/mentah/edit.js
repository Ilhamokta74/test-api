import supabase from "./supabase";

const edit = async (req, res) => {
    try { 
        const {tax, poli, date, location, name, nik, address, handphone, id} = req.query
        const { data, error } = await supabase
            .from('users')
            .update({ tax, poli, date, location, name, nik, address, handphone })
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