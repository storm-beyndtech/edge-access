import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import gold1 from "../assets/Gold-1.jpg";
import gold2 from "../assets/Gold-2.png";
import cryptoGlass from "../assets/Futuristic_Glass_Cube.png";

const Gold: React.FC = () => {
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<section className="relative sm:min-h-[500px] w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-700 to-blue-50/10 text-white">
				{/* Floating Background Cubes */}
				<motion.img
					src={cryptoGlass}
					alt="crypto illustration"
					className="absolute top-0 right-0 w-60 md:w-80 opacity-50 blur-md pointer-events-none select-none"
					animate={{ y: [0, -30, 0] }}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.img
					src={cryptoGlass}
					alt="crypto illustration"
					className="absolute bottom-0 left-0 w-60 md:w-80 opacity-50 blur-md pointer-events-none select-none"
					animate={{ y: [0, 30, 0] }}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>

				<div className="max-w-7xl mx-auto px-6 md:px-12">
					<div className="flex flex-col items-start text-left max-w-4xl">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight"
						>
							Gold Investment Excellence
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-white text-lg leading-relaxed mb-8"
						>
							Strategic gold investment opportunities with 98% pure gold and global market access.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<Link to="/login">
								<button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
									Start Gold Investment <ChevronRight className="w-5 h-5" />
								</button>
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Partnership Overview Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold text-gray-800 mb-6">Gold Refining Partnership</h2>
							<p className="text-lg text-gray-600 mb-6">
								Through our strategic partnership network, Edge Access leverages expertise from gold refining
								operations in the world's premier gold-producing regions. Our approach combines traditional mining
								excellence with innovative refining technologies across multiple continents.
							</p>
							<p className="text-lg text-gray-600 mb-6">
								Established through partnerships with prestigious players in global gold sectors, fueled by
								unwavering dedication to deliver exceptional investment opportunities and sustainable mining practices.
							</p>
							<div className="grid grid-cols-3 gap-6 mt-8">
								<div className=" bg-stone-100 rounded-lg p-4">
									<div className="text-3xl font-bold text-stone-600 mb-2">2019</div>
									<p className="text-gray-600">Partnership Established</p>
								</div>
								<div className=" bg-stone-100 rounded-lg p-4">
									<div className="text-3xl font-bold text-stone-600 mb-2">Global</div>
									<p className="text-gray-600">Network</p>
								</div>
								<div className=" bg-yellow-100 rounded-lg p-4 border-2 border-yellow-300">
									<div className="text-3xl font-bold text-yellow-600 mb-2">98%</div>
									<p className="text-gray-600">Gold Purity</p>
								</div>
							</div>
						</div>
						<div>
							<img src={gold1} alt="Gold Refining Operations" className="rounded-lg shadow-lg w-full" />
						</div>
					</div>
				</div>
			</section>

			{/* Innovation & Achievements Section */}
			<section className="relative py-16 bg-gradient-to-br from-slate-50 via-amber-50/30 to-yellow-50/20 overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-100/20 to-amber-200/10 rounded-full blur-3xl"></div>
					<div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-tr from-yellow-100/15 to-amber-200/10 rounded-full blur-2xl"></div>
					<div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-t from-yellow-100/20 to-transparent rounded-full blur-2xl"></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<p className="mb-14 text-2xl italic text-gray-600 font-light leading-relaxed">
						Our refining partners are forerunners in the global gold industry by introducing premium bullion hallmarks and
						crafted minted gold coins, catering to discerning markets worldwide with the highest quality standards.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						<div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-yellow-100/50 hover:border-yellow-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
							<div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-[35%] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
								LBMA Certification Pursuit
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Pursuing LBMA certification across our global refining network, setting new standards for the
								international gold industry
							</p>
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						</div>

						<div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-yellow-100/50 hover:border-yellow-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
							<div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-[35%] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
								Bullion Hallmark Innovation
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Industry leaders in introducing premium bullion hallmarks, establishing new quality standards for
								global gold markets
							</p>
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						</div>

						<div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-yellow-100/50 hover:border-yellow-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
							<div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-[35%] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
								Minted Gold Coins
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Crafted minted gold coins catering to discerning markets both locally and globally
							</p>
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						</div>
					</div>

					<img src={gold2} alt="gold" className="mb-30" />
				</div>
			</section>

			{/* Operations & Locations Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Global Operations & Mining Locations</h2>
						<p className="text-base lg:text-lg text-gray-600 max-w-3xl lg:mx-auto">
							Strategic operations spanning the world's most mineral-rich regions, from North American gold fields 
							to Australian mining districts, ensuring global reach and market access for our gold refining excellence.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold text-gray-800 mb-6">Mining Operations</h3>
							<div className="bg-amber-50 rounded-lg p-6">
								<h4 className="font-semibold text-gray-800 mb-4">Primary Mining Regions</h4>
								<div className="space-y-2">
									<div className="flex justify-between items-center">
										<span className="text-gray-600">North America</span>
										<span className="font-semibold text-gray-800">Nevada Gold Fields</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Australia</span>
										<span className="font-semibold text-gray-800">Kalgoorlie District</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-600">South America</span>
										<span className="font-semibold text-yellow-600">Andean Gold Belt</span>
									</div>
								</div>
							</div>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-gray-800 mb-6">International Branches</h3>
							<div className="grid grid-cols-2 gap-4">
								<div className="bg-gray-50 rounded-lg p-4 text-left lg:text-center">
									<h4 className="font-semibold text-gray-800">United Kingdom</h4>
									<p className="text-sm text-gray-600">European Operations</p>
								</div>
								<div className="bg-gray-50 rounded-lg p-4 text-left lg:text-center">
									<h4 className="font-semibold text-gray-800">Austria</h4>
									<p className="text-sm text-gray-600">Central European Hub</p>
								</div>
								<div className="bg-gray-50 rounded-lg p-4 text-left lg:text-center">
									<h4 className="font-semibold text-gray-800">Amsterdam</h4>
									<p className="text-sm text-gray-600">Trading Center</p>
								</div>
								<div className="bg-gray-50 rounded-lg p-4 text-left lg:text-center">
									<h4 className="font-semibold text-gray-800">Dubai</h4>
									<p className="text-sm text-gray-600">Middle East Gateway</p>
								</div>
								<div className="bg-gray-50 rounded-lg p-4 text-left lg:text-center">
									<h4 className="font-semibold text-gray-800">Mauritius</h4>
									<p className="text-sm text-gray-600">Indian Ocean Hub</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Signature Traits Section */}
			<section className="py-16 bg-gradient-to-b from-white to-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Our Signature Traits</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg p-6 shadow-md">
							<h3 className="text-xl font-semibold text-gray-800 mb-4">Accountability</h3>
							<p className="text-gray-600 mb-4">
								We have an open and proactive communication channel, supported by automated systems, that
								ensure responsible conduct to our valued clients.
							</p>
							<p className="text-gray-600">
								We foster a culture of initiative and ownership, making each team member accountable for their
								actions and commitments.
							</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<h3 className="text-xl font-semibold text-gray-800 mb-4">Credibility</h3>
							<p className="text-gray-600 mb-4">
								Our steadfast dedication to maintaining credibility guarantees the fulfillment of our
								obligations and the consistent surpassing of expectations.
							</p>
							<p className="text-gray-600">
								Our Credibility has been cemented over time based on our unrivaled achievements and stellar
								reputation of our team.
							</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<h3 className="text-xl font-semibold text-gray-800 mb-4">Green Gold</h3>
							<p className="text-gray-600 mb-4">
								As part of our commitment to sustainable development, we are dedicated to implementing green
								mining practices that minimize environmental impact.
							</p>
							<p className="text-gray-600">
								We strive to be environmentally responsible in all aspects of our refining process, ensuring a
								positive and lasting legacy for future generations.
							</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<h3 className="text-xl font-semibold text-gray-800 mb-4">Quality and Safety</h3>
							<p className="text-gray-600 mb-4">
								Our process and automation practices not only enhance the quality of our output but also
								prioritize the safety and security of our dedicated employees.
							</p>
							<p className="text-gray-600">
								We maintain an ISO certified Lab (ISO/IEC 17025:2017), ensuring consistent delivery of
								high-quality services and possess all crucial GSA certifications.
							</p>
						</div>
						<div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 shadow-md border-2 border-yellow-200">
							<h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Gold Purity</h3>
							<p className="text-gray-600 mb-4">
								Edge Access offers exceptional gold investments with our refined gold achieving 98% purity, 
								setting industry standards for quality and excellence.
							</p>
							<div className="grid grid-cols-2 gap-4 mt-4">
								<div className="text-center">
									<div className="text-2xl font-bold text-yellow-600">98%</div>
									<p className="text-sm text-gray-600">Standard Purity</p>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-yellow-600">99.9%</div>
									<p className="text-sm text-gray-600">Premium Variants</p>
								</div>
							</div>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<h3 className="text-xl font-semibold text-gray-800 mb-4">Expertise and Innovation</h3>
							<p className="text-gray-600 mb-4">
								With the backing of Africa's leading IT company, IPMC, we leverage cutting-edge technology and
								innovative solutions.
							</p>
							<p className="text-gray-600">
								We strengthen our end-to-end supply chain, enabling us to offer seamless, efficient, and
								reliable services to our valued clients.
							</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<h3 className="text-xl font-semibold text-gray-800 mb-4">Corporate Social Responsibility</h3>
							<p className="text-gray-600 mb-4">
								We believe in leading by example, demonstrating a strong and sustained commitment to
								responsible business practices.
							</p>
							<p className="text-gray-600">
								We contribute for better and more efficient tomorrow through social and environmental
								sustainability initiatives.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Investment Opportunities Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Gold Investment Opportunities</h2>
						<p className="text-base lg:text-lg text-gray-600 max-w-3xl lg:mx-auto">
							Partner with Edge Access to access premium gold investment opportunities through our strategic
							partnership with leading African gold refining operations.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
							<h3 className="text-xl font-semibold text-gray-800 mb-4">Gold Bullion Investment</h3>
							<p className="text-gray-600 mb-4">
								Direct investment in certified gold bullion with hallmark authentication
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" LBMA standard compliance</li>
								<li>" Hallmark certification</li>
								<li>" Secure storage options</li>
								<li>" Global market access</li>
							</ul>
						</div>
						<div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
							<h3 className="text-xl font-semibold text-gray-800 mb-4">Refinery Operations</h3>
							<p className="text-gray-600 mb-4">
								Strategic investment in gold refining infrastructure and technology
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" State-of-the-art facilities</li>
								<li>" Advanced purification technology</li>
								<li>" Quality assurance systems</li>
								<li>" Operational optimization</li>
							</ul>
						</div>
						<div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
							<h3 className="text-xl font-semibold text-gray-800 mb-4">Precious Metals Portfolio</h3>
							<p className="text-gray-600 mb-4">
								Diversified precious metals investment with focus on gold and related assets
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" Portfolio diversification</li>
								<li>" Risk management strategies</li>
								<li>" Market analysis and insights</li>
								<li>" Professional management</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="py-16 bg-stone-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
					<h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Invest in Gold Excellence with Edge Access</h2>
					<p className="text-lg lg:text-xl text-yellow-100 mb-8 max-w-3xl lg:mx-auto">
						Connect with our gold investment specialists to explore opportunities in Africa's premier gold
						refining operations and global precious metals markets.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-yellow-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							Contact Gold Investment Team
						</button>
						<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-900 transition-colors">
							Download Gold Investment Guide
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Gold;
