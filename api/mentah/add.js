import supabase from "./supabase";

const add = async (req, res) => {
    try { 
        const {tax, poli, date, location, name, nik, address, handphone} = req.query
        const { data, error } = await supabase
            .from('users')
            .insert([
                { tax, poli, date, location, name, nik, address, handphone },
        ])
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

export default add;