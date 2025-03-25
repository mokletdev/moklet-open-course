import Image from 'next/image';

const courses = [
    { name: 'Bahasa Indonesia', instructor: 'Oleh Bu Terri', level: 'Kelas XI', image: '/images/CourseImage.png' },
    { name: 'Matematika', instructor: 'Oleh Pak Rendy', level: 'Kelas XI', image: '/images/CourseImage.png' },
    { name: 'Produktif RPL', instructor: 'Oleh Pak Ilham', level: 'Kelas XI', image: '/images/CourseImage.png' },
  ];
  
  const FeaturedCourses = () => {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-left">
            <h2 className="text-3xl font-semibold text-black mb-8 font-raleway">Kelas Unggulan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-[#B9DCFC]  hover:shadow-lg transition"
              >
                {/* Course Image */}
                <Image width={300} height={200}
                  src='/CourseImage.png'
                  alt={`${course.name} image`}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
  
                {/* Course Details */}
                <h3 className="text-xl font-semibold text-blue-600">{course.name}</h3>
                <p className="text-gray-600">{course.instructor}</p>
                <p className="text-blue-500 text-sm">{course.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedCourses;
  