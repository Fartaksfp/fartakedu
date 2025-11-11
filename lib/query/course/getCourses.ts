import supabase from "@/lib/supabaseClient"

export async function getCourses() {
    const { data, error } = await supabase.rpc('get_all_courses')

    if (error) {
        return { error: error.message, status: 200 }
    }
    if (data) {
        const coursesdata = data
        return { coursesdata: coursesdata, status: 200 }
    }
}
