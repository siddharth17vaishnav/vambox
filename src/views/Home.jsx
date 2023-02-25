import React from 'react'
import {HeroComponent,FooterComponent,DropFileComponent,DescriptionComponent,ContactComponent} from '../common/Path'

const Home = () => {
  return (
    <div>
    <HeroComponent
    heading="VAMBOX"
    message="Enjoy Unlimited 360* Videos and Images in VR for FREE."
  />
  <DescriptionComponent />
  <DropFileComponent />
  <ContactComponent />
  <FooterComponent />
    </div>
  )
}

export default Home
