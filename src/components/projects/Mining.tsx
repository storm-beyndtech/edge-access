import { motion } from "framer-motion";
import { Users, Globe, Shield, HardHat, TrendingUp, Target, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import miningImage from "../../assets/mining.jpg";

export default function Mining() {
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
		<section id="mining" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-gray-50 relative overflow-hidden">
			{/* Background Decorative Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-32 h-32 bg-slate-200/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-200/20 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-slate-100/10 rounded-full blur-3xl"></div>
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
						<div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg">
							<HardHat className="w-7 h-7 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Sustainable Mining Excellence
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-gray-700 mx-auto mb-6 rounded-full"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Pioneering responsible resource extraction through innovative mining technologies, environmental 
						stewardship, and meaningful partnerships with indigenous communities worldwide.
					</p>
				</motion.div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						{/* Stats Cards */}
						<div className="grid grid-cols-2 gap-4 mb-8">
							<div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 shadow-lg">
								<div className="text-3xl font-bold text-slate-600 mb-1">$300M+</div>
								<p className="text-sm text-gray-600">Community Investment</p>
							</div>
							<div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 shadow-lg">
								<div className="text-3xl font-bold text-gray-600 mb-1">43%</div>
								<p className="text-sm text-gray-600">Emission Reduction</p>
							</div>
						</div>

						<h3 className="text-3xl font-bold text-gray-900 mb-6">Responsible Resource Development</h3>
						<p className="text-lg text-gray-700 mb-6 leading-relaxed">
							Edge Access operates at the forefront of sustainable mining, securing essential minerals for 
							renewable energy infrastructure while maintaining the highest environmental and social 
							responsibility standards. Our operations are critical to the global transition to clean energy.
						</p>
						<p className="text-lg text-gray-700 mb-6 leading-relaxed">
							Through established agreements with the Kariyarra, Palyku, Nyiyaparli, Ngarla, and Nyamal 
							peoples, we've contributed over $300 million in royalties while investing significantly in 
							health, education, arts, and cultural preservation programs.
						</p>

						{/* ESG Features */}
						<div className="bg-gradient-to-r from-slate-500/10 to-gray-500/10 rounded-xl p-6 border border-slate-200/50">
							<h4 className="font-bold text-gray-900 mb-3 flex items-center">
								<Target className="w-5 h-5 text-slate-600 mr-2" />
								ESG Leadership
							</h4>
							<div className="grid grid-cols-2 gap-3 text-sm">
								<div className="flex items-center">
									<div className="w-2 h-2 bg-slate-500 rounded-full mr-2"></div>
									<span className="text-gray-700">100% Compliance</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Net Zero by 2050</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-slate-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Community Partnerships</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Cultural Heritage</span>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="relative"
					>
						<div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
							<img src={miningImage} alt="Mining operations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
							<div className="absolute bottom-8 left-8 right-8 text-white">
								<h3 className="text-2xl font-bold mb-3">Sustainable Mining Practices</h3>
								<p className="text-slate-100 mb-4">Committed to responsible resource extraction and community development</p>
								<div className="flex items-center space-x-6">
									<div className="text-center">
										<div className="text-xl font-bold">100%</div>
										<div className="text-xs text-slate-200">Regulatory Compliance</div>
									</div>
									<div className="text-center">
										<div className="text-xl font-bold">5+</div>
										<div className="text-xs text-slate-200">Indigenous Partnerships</div>
									</div>
								</div>
							</div>
							{/* Decorative corner */}
							<div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
								<HardHat className="w-8 h-8 text-white" />
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
						className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2" 
						variants={itemVariants}
					>
						<div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
							<Users className="h-7 w-7 text-white" />
						</div>
						<h3 className="text-xl font-bold mb-4 text-gray-900">Community Engagement</h3>
						<p className="text-gray-700 leading-relaxed mb-4">
							We maintain 100% compliance with legislation targeting 43% emission reduction by 2030 and 
							net zero by 2050, while requiring agreements with Traditional Owners before project commencement.
						</p>
						<div className="pt-4 border-t border-blue-100">
							<div className="flex items-center text-sm text-blue-600 font-semibold">
								<TrendingUp className="w-4 h-4 mr-2" />
								$300M+ community investment
							</div>
						</div>
					</motion.div>

					<motion.div 
						className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2" 
						variants={itemVariants}
					>
						<div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
							<Shield className="h-7 w-7 text-white" />
						</div>
						<h3 className="text-xl font-bold mb-4 text-gray-900">Environmental Stewardship</h3>
						<p className="text-gray-700 leading-relaxed mb-4">
							Comprehensive environmental management covering flora, fauna, water, land rehabilitation, 
							and carbon emissions, with full compliance across all obligations and strict cultural heritage protocols.
						</p>
						<div className="pt-4 border-t border-emerald-100">
							<div className="flex items-center text-sm text-emerald-600 font-semibold">
								<Shield className="w-4 h-4 mr-2" />
								Decades of responsible operations
							</div>
						</div>
					</motion.div>

					<motion.div 
						className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2" 
						variants={itemVariants}
					>
						<div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
							<Globe className="h-7 w-7 text-white" />
						</div>
						<h3 className="text-xl font-bold mb-4 text-gray-900">Supply Chain Optimization</h3>
						<p className="text-gray-700 leading-relaxed mb-4">
							Optimizing global mining supply chains from exploration to production, providing efficient 
							planning, monitoring, and knowledge sharing services across customers and service partners worldwide.
						</p>
						<div className="pt-4 border-t border-purple-100">
							<div className="flex items-center text-sm text-purple-600 font-semibold">
								<BarChart3 className="w-4 h-4 mr-2" />
								Global market analysis
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Renewable Energy Focus Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-r from-white/95 to-slate-50/95 backdrop-blur-sm p-10 rounded-3xl border border-slate-200/50 shadow-xl">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
							<div className="lg:col-span-2">
								<h3 className="text-3xl font-bold mb-6 text-gray-900">Renewable Energy Infrastructure</h3>
								<p className="text-lg text-gray-700 mb-6 leading-relaxed">
									Mining operations produce the essential materials required for renewable energy generation, 
									distribution, and delivery. From solar panels and wind turbines to EV batteries, the first 
									step in creating clean energy infrastructure begins with responsible mining practices.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-6">
									<div className="flex items-center">
										<div className="w-3 h-3 bg-slate-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Solar Panel Materials</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Wind Turbine Components</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-slate-500 rounded-full mr-3"></div>
										<span className="text-gray-700">EV Battery Minerals</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Grid Infrastructure</span>
									</div>
								</div>
							</div>
							<div className="text-center lg:text-right">
								<Link
									to="/gold"
									className="inline-flex items-center bg-gradient-to-r from-slate-600 to-gray-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-slate-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
								>
									Explore Mining Projects
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