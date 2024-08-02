// ProfileServices.js
const services = [
    {
      title: 'Company Name',
      content: 'Profit Pioneer',
    },
    {
      title: 'Company Background',
      content: 'Profit Pioneer is a leading financial services and technology firm dedicated to empowering businesses and individuals to achieve their financial goals through innovative solutions. Established in 2012, our company has consistently pushed the boundaries of what’s possible in the world of finance, leveraging cutting-edge technology to provide unparalleled insights and services to our clients.',
    },
    {
      title: 'Our Services',
      content: 'At Profit Pioneer, our services is to democratize access to advanced financial tools and expertise. We aim to bridge the gap between sophisticated financial strategies and everyday users, ensuring that everyone has the opportunity to succeed financially.',
    },
  ];
  
  const ProfileServices = () => {
    return (
      <div className="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8 mt-16">
        {services.map((service, index) => (
          <div key={index}>
            <h3 className="truncate text-lg font-bold text-gray-900 mt-10">{service.title}</h3>
            <p className="mt-4 text-sm text-gray-900 leading-6">{service.content}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProfileServices;
  