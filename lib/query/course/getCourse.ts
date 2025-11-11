import supabase from "@/lib/supabaseClient"

export async function getCourse( href: string ) {
    const { data, error } = await supabase.rpc('get_course', {
        p_href: href
    })

    if (error) {
        return { error: error.message, status: 500 }
    }
    if (data) {
        const coursedata = data
        return { coursesdata: coursedata, status: 200 }
    }

}
