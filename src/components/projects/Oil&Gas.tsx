import { motion } from "framer-motion";
import { ArrowRight, Droplets, Flame, BarChart3, Zap, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";
import oilGasImage from "../../assets/oil-gas.jpg";

export default function OilAndGas() {
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
		<section id="oil-gas" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
			{/* Background Decorative Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"></div>
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
						<div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
							<Flame className="w-7 h-7 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Energy Innovation
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Leading the future of energy through responsible oil and gas operations, innovative exploration 
						technologies, and sustainable transition to renewable energy sources.
					</p>
				</motion.div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="relative"
					>
						<div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
							<img src={oilGasImage} alt="Oil and gas operations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
							<div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
							<div className="absolute bottom-8 left-8 right-8 text-white">
								<h3 className="text-2xl font-bold mb-3">Advanced Energy Solutions</h3>
								<p className="text-blue-100 mb-4">Powering the future with responsible extraction and clean energy innovation</p>
								<div className="flex items-center space-x-6">
									<div className="text-center">
										<div className="text-xl font-bold">95%</div>
										<div className="text-xs text-blue-200">Safety Rating</div>
									</div>
									<div className="text-center">
										<div className="text-xl font-bold">40%</div>
										<div className="text-xs text-blue-200">Renewable Mix</div>
									</div>
								</div>
							</div>
							{/* Decorative corner */}
							<div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
								<Flame className="w-8 h-8 text-white" />
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						{/* Stats Cards */}
						<div className="grid grid-cols-2 gap-4 mb-8">
							<div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 shadow-lg">
								<div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
								<p className="text-sm text-gray-600">Active Operations</p>
							</div>
							<div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 shadow-lg">
								<div className="text-3xl font-bold text-indigo-600 mb-1">50%</div>
								<p className="text-sm text-gray-600">Efficiency Increase</p>
							</div>
						</div>

						<h3 className="text-3xl font-bold text-gray-900 mb-6">Responsible Energy Leadership</h3>
						<p className="text-lg text-gray-700 mb-6 leading-relaxed">
							Edge Access leads the energy transition through innovative oil and gas exploration, production, 
							and distribution operations. Our strategic approach balances traditional energy excellence with 
							cutting-edge renewable energy integration and sustainable practices.
						</p>
						<p className="text-lg text-gray-700 mb-6 leading-relaxed">
							Operating across multiple energy sectors, we leverage advanced exploration techniques, 
							automated production systems, and clean energy technologies to deliver reliable energy 
							solutions while minimizing environmental impact.
						</p>

						{/* Technology Features */}
						<div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-200/50">
							<h4 className="font-bold text-gray-900 mb-3 flex items-center">
								<Target className="w-5 h-5 text-blue-600 mr-2" />
								Innovation Pipeline
							</h4>
							<div className="grid grid-cols-2 gap-3 text-sm">
								<div className="flex items-center">
									<div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Advanced Drilling Tech</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Carbon Capture Systems</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Smart Grid Integration</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Renewable Transition</span>
								</div>
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
						className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2" 
						variants={itemVariants}
					>
						<div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
							<Droplets className="h-7 w-7 text-white" />
						</div>
						<h3 className="text-xl font-bold mb-4 text-gray-900">Exploration & Production</h3>
						<p className="text-gray-700 leading-relaxed mb-4">
							Utilizing state-of-the-art exploration techniques and efficient production methods to maximize 
							resource recovery while maintaining the highest environmental and safety standards.
						</p>
						<div className="pt-4 border-t border-blue-100">
							<div className="flex items-center text-sm text-blue-600 font-semibold">
								<BarChart3 className="w-4 h-4 mr-2" />
								40% efficiency improvement
							</div>
						</div>
					</motion.div>

					<motion.div 
						className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2" 
						variants={itemVariants}
					>
						<div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
							<Zap className="h-7 w-7 text-white" />
						</div>
						<h3 className="text-xl font-bold mb-4 text-gray-900">Clean Energy Transition</h3>
						<p className="text-gray-700 leading-relaxed mb-4">
							Leading the industry transition to renewable energy sources through strategic investments 
							in solar, wind, and innovative clean energy technologies for sustainable growth.
						</p>
						<div className="pt-4 border-t border-emerald-100">
							<div className="flex items-center text-sm text-emerald-600 font-semibold">
								<Target className="w-4 h-4 mr-2" />
								60% renewable by 2030
							</div>
						</div>
					</motion.div>

					<motion.div 
						className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2" 
						variants={itemVariants}
					>
						<div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
							<Shield className="h-7 w-7 text-white" />
						</div>
						<h3 className="text-xl font-bold mb-4 text-gray-900">Safety & Compliance</h3>
						<p className="text-gray-700 leading-relaxed mb-4">
							Maintaining industry-leading safety standards through rigorous monitoring, advanced 
							safety systems, and comprehensive compliance protocols across all operations.
						</p>
						<div className="pt-4 border-t border-orange-100">
							<div className="flex items-center text-sm text-orange-600 font-semibold">
								<Shield className="w-4 h-4 mr-2" />
								Zero incident target
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Environmental Responsibility Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-sm p-10 rounded-3xl border border-blue-200/50 shadow-xl">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
							<div className="lg:col-span-2">
								<h3 className="text-3xl font-bold mb-6 text-gray-900">Environmental Stewardship</h3>
								<p className="text-lg text-gray-700 mb-6 leading-relaxed">
									Committed to responsible energy production with comprehensive environmental monitoring, 
									carbon emission reduction programs, and strategic investment in renewable energy 
									infrastructure to support the global transition to clean energy.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-6">
									<div className="flex items-center">
										<div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Carbon Capture Technology</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Renewable Energy Integration</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Environmental Monitoring</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Sustainable Operations</span>
									</div>
								</div>
							</div>
							<div className="text-center lg:text-right">
								<Link
									to="/projects"
									className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
								>
									Explore Energy Projects
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