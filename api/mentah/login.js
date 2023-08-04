import supabase from "./supabase";

const login = async (req, res) => {
    try { 
        const { error } = await supabase.auth.signIn({email, password})
        if (error) {
            return res.json(error)
        }
        alert('logged in')
        
    } catch (error) {
        return res.json(error)
    }    
}

export default login;