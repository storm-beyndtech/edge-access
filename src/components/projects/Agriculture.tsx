import { motion } from "framer-motion";
import { ArrowRight, Leaf, Globe, BarChart3, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

import agricultureImage from "../../assets/agriculture.jpg";

export default function Agriculture() {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section id="agriculture" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
			{/* Background Decorative Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-100/10 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<div className="flex items-center justify-center mb-6">
						<div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
							<Leaf className="w-7 h-7 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Agricultural Excellence
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6 rounded-full"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Transforming agriculture through sustainable innovation, technology integration, and strategic 
						partnerships across global markets.
					</p>
				</motion.div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="order-2 lg:order-1"
					>
						{/* Stats Cards */}
						<div className="grid grid-cols-2 gap-4 mb-8">
							<div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-green-200/50 shadow-lg">
								<div className="text-3xl font-bold text-green-600 mb-1">14+</div>
								<p className="text-sm text-gray-600">Properties Managed</p>
							</div>
							<div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-green-200/50 shadow-lg">
								<div className="text-3xl font-bold text-emerald-600 mb-1">25%</div>
								<p className="text-sm text-gray-600">Productivity Increase</p>
							</div>
						</div>

						<h3 className="text-3xl font-bold text-gray-900 mb-6">Sustainable Agriculture Portfolio</h3>
						<p className="text-lg text-gray-700 mb-6 leading-relaxed">
							Edge Access has established a comprehensive agricultural investment portfolio, managing iconic 
							properties such as Ashburton Downs and Hamersley Station across Australia. Our strategic approach 
							combines traditional farming excellence with cutting-edge technology.
						</p>
						<p className="text-lg text-gray-700 mb-6 leading-relaxed">
							Spanning from Western Australia to New South Wales, our 14+ properties produce premium beef for 
							domestic and international markets, leveraging innovations in digital communications, automated 
							weighing systems, and sustainable energy solutions.
						</p>

						{/* Technology Features */}
						<div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-200/50">
							<h4 className="font-bold text-gray-900 mb-3 flex items-center">
								<Target className="w-5 h-5 text-green-600 mr-2" />
								Innovation Focus
							</h4>
							<div className="grid grid-cols-2 gap-3 text-sm">
								<div className="flex items-center">
									<div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Digital UHF Systems</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Solar Power Integration</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Drone Monitoring</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Remote Bore Systems</span>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="order-1 lg:order-2 relative"
					>
						<div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
							<img src={agricultureImage} alt="Agricultural landscape" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
							<div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/20 to-transparent"></div>
							<div className="absolute bottom-8 left-8 right-8 text-white">
								<h3 className="text-2xl font-bold mb-3">Sustainable Innovation</h3>
								<p className="text-green-100 mb-4">Revolutionizing agricultural practices with advanced technology and environmental stewardship</p>
								<div className="flex items-center space-x-6">
									<div className="text-center">
										<div className="text-xl font-bold">98%</div>
										<div className="text-xs text-green-200">Sustainability Score</div>
									</div>
									<div className="text-center">
										<div className="text-xl font-bold">5★</div>
										<div className="text-xs text-green-200">Quality Rating</div>
									</div>
								</div>
							</div>
							{/* Decorative corner */}
							<div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
								<Leaf className="w-8 h-8 text-white" />
							</div>
						</div>
					</motion.div>
				</div>

				{/* Feature Cards */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div 
						className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2" 
						variants={itemVariants}
					>
						<div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
							<Leaf className="h-7 w-7 text-white" />
						</div>
						<h3 className="text-xl font-bold mb-4 text-gray-900">Sustainable Practices</h3>
						<p className="text-gray-700 leading-relaxed mb-4">
							Leading the industry in sustainable agriculture, positioning Australia as a premier food supplier 
							and reliable partner in global food security through innovative production methods.
						</p>
						<div className="pt-4 border-t border-green-100">
							<div className="flex items-center text-sm text-green-600 font-semibold">
								<TrendingUp className="w-4 h-4 mr-2" />
								30% efficiency improvement
							</div>
						</div>
					</motion.div>

					<motion.div 
						className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2" 
						variants={itemVariants}
					>
						<div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
							<Globe className="h-7 w-7 text-white" />
						</div>
						<h3 className="text-xl font-bold mb-4 text-gray-900">Global Market Access</h3>
						<p className="text-gray-700 leading-relaxed mb-4">
							Leveraging Australia's stable business environment and strategic Asia-Pacific trade agreements 
							to deliver premium agricultural products to international markets.
						</p>
						<div className="pt-4 border-t border-blue-100">
							<div className="flex items-center text-sm text-blue-600 font-semibold">
								<Users className="w-4 h-4 mr-2" />
								50+ international partners
							</div>
						</div>
					</motion.div>

					<motion.div 
						className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2" 
						variants={itemVariants}
					>
						<div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
							<BarChart3 className="h-7 w-7 text-white" />
						</div>
						<h3 className="text-xl font-bold mb-4 text-gray-900">Growth Opportunities</h3>
						<p className="text-gray-700 leading-relaxed mb-4">
							Capitalizing on rising international investment in Australia's agriculture sector, driven by 
							demand for premium food products and regional supply chain integration.
						</p>
						<div className="pt-4 border-t border-purple-100">
							<div className="flex items-center text-sm text-purple-600 font-semibold">
								<Target className="w-4 h-4 mr-2" />
								15% annual growth target
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Government Support Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-r from-white/95 to-green-50/95 backdrop-blur-sm p-10 rounded-3xl border border-green-200/50 shadow-xl">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
							<div className="lg:col-span-2">
								<h3 className="text-3xl font-bold mb-6 text-gray-900">Strategic Government Partnership</h3>
								<p className="text-lg text-gray-700 mb-6 leading-relaxed">
									Backed by the Australian Government's agricultural competitiveness initiatives and northern 
									development programs, our investments benefit from strategic policy support aimed at 
									enhancing global competitiveness and supply chain optimization.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-6">
									<div className="flex items-center">
										<div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Research & Development Support</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Export Market Expansion</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Supply Chain Investment</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Productivity Enhancement</span>
									</div>
								</div>
							</div>
							<div className="text-center lg:text-right">
								<Link
									to="/retirement"
									className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
								>
									Explore Investment Opportunities
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}