import Location from '../Location/Location';
import './Locations.css'

const Locations = () => {
  return (
    <>
    <div className="location-heading">
        <p>We're available here!</p>
    </div>

    <div className='locations-container'>
        <Location location_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571513576!2d72.71637275542061!3d19.08217751216384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1682576032880!5m2!1sen!2sin'} />
        <Location location_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5263489142!2d76.76357278336052!3d28.643684622513906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1682576930959!5m2!1sen!2sin'} />
        <Location location_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089970882!2d77.46612549485897!3d12.953945613736227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1682576981260!5m2!1sen!2sin'} />
        <Location location_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203577894!2d78.24323196667615!3d17.412281015275656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1682577057460!5m2!1sen!2sin'} />
        <Location location_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918865065!2d72.41492971537379!3d23.020158084113362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1682577491981!5m2!1sen!2sin'} />
        <Location location_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.36079039628!2d76.82493705869383!3d28.422858323869324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1682577508615!5m2!1sen!2sin'} />
        <Location location_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.13131256663!2d80.04419775246673!3d13.047473315957362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1682577573748!5m2!1sen!2sin'} />
        <Location location_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.17006018996!2d73.69815394055102!3d18.52454503977252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1682577611077!5m2!1sen!2sin'} />
    </div>

    <div className='location-bottom'>
        <p>..we're coming to your city soon!</p>
    </div>
    </>
  )
}

export default Locations;