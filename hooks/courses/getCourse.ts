import courses from "@/data/courses";

function getCourse(href: string) {

    const course = courses.filter((course) => course.href == href)

    return course[0]
}

export default getCourse