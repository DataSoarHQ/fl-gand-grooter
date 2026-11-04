// Every photo the site uses, imported once so Astro can resize and compress it.
import logo from '../assets/photos/logo-gg-rooter.png';
import heroHandshake from '../assets/photos/hero-handshake-poster.jpg';
import heroDrain from '../assets/photos/hero-drain-poster.jpg';
import heroSewer from '../assets/photos/hero-sewer-poster.jpg';
import heroMold from '../assets/photos/hero-mold-poster.jpg';
import floorCamera from '../assets/photos/floor-drain-camera.jpg';
import drainMachine from '../assets/photos/drain-machine-under-sink.jpg';
import cameraInspection from '../assets/photos/sewer-camera-inspection.jpg';
import waterExtraction from '../assets/photos/water-extraction-cleanup.jpg';
import moldTech from '../assets/photos/mold-mitigation-tech.jpg';
import techThumbs from '../assets/photos/technician-thumbs-up.jpg';
import mainLine from '../assets/photos/main-sewer-line-cleaning.jpg';
import clogSink from '../assets/photos/clogged-sink.jpg';
import floorDrain from '../assets/photos/basement-floor-drain.jpg';
import recurring from '../assets/photos/recurring-drain-clog.jpg';
import drainBanner from '../assets/photos/drain-cleaning-banner.webp';
import cameraMonitor from '../assets/photos/sewer-camera-monitor.jpg';
import sewerBackup from '../assets/photos/sewer-backup-cleanup.jpg';
import standingWater from '../assets/photos/standing-water-cleanup.jpg';
import contaminated from '../assets/photos/contaminated-water-cleanup.jpg';
import ceilingStain from '../assets/photos/ceiling-water-stain.jpg';
import moldWater from '../assets/photos/mold-after-water-damage.jpg';
import moldWall from '../assets/photos/mold-on-block-wall.webp';
import moldSewer from '../assets/photos/mold-after-sewer-backup.webp';
import moldContainment from '../assets/photos/mold-containment.jpg';
import plumbingCloseup from '../assets/photos/plumbing-repair-closeup.jpg';
import cameraKit from '../assets/photos/job-inspection-camera-kit.jpg';
import jobCrawlspace from '../assets/photos/job-crawlspace-repair.jpg';
import jobVanTrailer from '../assets/photos/job-van-and-trailer.jpg';
import jobJetter from '../assets/photos/job-jetter-trailer.jpg';
import jobPipes from '../assets/photos/job-commercial-pipes.jpg';
import jobCommercialJetter from '../assets/photos/job-commercial-jetter.jpg';
import jobVanCable from '../assets/photos/job-van-cable-machine.jpg';
import jobKitchen from '../assets/photos/job-kitchen-drain.jpg';

export default {
  logo, heroHandshake, heroDrain, heroSewer, heroMold, floorCamera, drainMachine, cameraInspection,
  waterExtraction, moldTech, techThumbs, mainLine, clogSink, floorDrain, recurring, drainBanner, cameraMonitor,
  sewerBackup, standingWater, contaminated, ceilingStain, moldWater, moldWall, moldSewer, moldContainment,
  plumbingCloseup, cameraKit,
};

// The team at work, shown on the About page.
export const gallery = [
  { src: jobKitchen, alt: 'G&G Rooter technician clearing a commercial kitchen drain' },
  { src: jobVanCable, alt: 'Technician pulling a drain cable from the G&G Rooter service van' },
  { src: cameraKit, alt: 'Sewer inspection camera kit ready for a job' },
  { src: drainMachine, alt: 'Drain cleaning machine set up under a sink' },
  { src: jobPipes, alt: 'Technician working on overhead drain pipes in a commercial building' },
  { src: techThumbs, alt: 'Smiling G&G Rooter technician giving a thumbs up' },
  { src: jobVanTrailer, alt: 'G&G Rooter service van and equipment trailer' },
  { src: floorCamera, alt: 'Sewer camera monitor beside a floor drain' },
  { src: jobJetter, alt: 'Hydro jetter trailer parked behind a G&G Rooter van' },
  { src: jobCrawlspace, alt: 'Technician repairing a drain line through an opened wall' },
  { src: jobCommercialJetter, alt: 'G&G Rooter jetter trailer on a commercial job' },
];
