import Cta from "../components/Home/Cta";
import Agriculture from "../components/projects/Agriculture";
import Hero from "../components/projects/Hero";
import Mining from "../components/projects/Mining";
import OilAndGas from "../components/projects/Oil&Gas";
import Gold from "../components/projects/Gold";
import Retirement from "../components/projects/Retirement";
import Philanthropy from "../components/projects/Philanthropy";

const Projects = () => {
	return (
		<div>
			<Hero />
			<Mining />
			<Gold />
			<Agriculture />
			<OilAndGas />
			<Retirement />
			<Philanthropy />
			<Cta />
		</div>
	);
};

export default Projects;
