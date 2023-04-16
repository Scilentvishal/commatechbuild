import Image from 'next/image';
import Head from './Head';
import Industries from './Industries';
import Portfolio from './Portfolio';
import Services from './Services';
import Team from './team';

const Main = () => {

  return (
    <div className=''>
      <Head />
      <Services />
      <Industries />
      <Portfolio />
      <Team />
    </div>
  )
}

export default Main