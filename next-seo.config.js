let config = {
    title:"Resource Tracker | CovidKashmir",
    description:"Resource Tracker is a website with latest contact information about multiple types of resources related to Covid-19. For e.g., Medicines, Hospitals, Plasma, Blood, Doctors, etc. It has been started as an initiatve by CovidKashmir.",
    url:"https://resources.covidkashmir.org",
}
export default {
    title:config.title,
    description:config.description,
    canonical:config.url,
    openGraph: {
      url:  config.url,
      title: config.title,
      description: config.description,
      type: 'website',
      site_name: config.title,
      images: [
        {
          url: config.url+'/og_image.png',
          width: 4800,
          height: 2508,
          alt: 'OG Image'
      },
      ]
    },
  };
