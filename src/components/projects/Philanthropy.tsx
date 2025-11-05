import { motion } from "framer-motion";
import { Heart, GraduationCap, Award, Users, Globe, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import philanthropyImage from "../../assets/philanthropy.jpg";

export default function Philanthropy() {
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
		<section id="philanthropy" className="py-16 md:py-24 bg-gradient-to-br from-rose-50 to-pink-50 relative overflow-hidden">
			{/* Background Decorative Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 right-10 w-32 h-32 bg-rose-200/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-rose-100/10 rounded-full blur-3xl"></div>
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
						<div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
							<Heart className="w-7 h-7 text-white" />
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Community Impact & Philanthropy
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto mb-6 rounded-full"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Edge Access Society demonstrates unwavering commitment to enhancing community well-being through 
						strategic partnerships, educational initiatives, and cultural preservation programs.
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
						{/* Impact Stats */}
						<div className="grid grid-cols-2 gap-4 mb-8">
							<div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-rose-200/50 shadow-lg">
								<div className="text-3xl font-bold text-rose-600 mb-1">2012</div>
								<p className="text-sm text-gray-600">Partnership Since</p>
							</div>
							<div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-rose-200/50 shadow-lg">
								<div className="text-3xl font-bold text-pink-600 mb-1">10+</div>
								<p className="text-sm text-gray-600">Scholarships Awarded</p>
							</div>
						</div>

						<h3 className="text-3xl font-bold text-gray-900 mb-6">Building Stronger Communities</h3>
						<p className="text-lg text-gray-700 mb-6 leading-relaxed">
							Edge Access Society showcases dedication to investing in initiatives that enhance community 
							well-being nationwide. Through strategic partnerships and targeted programs, we create 
							lasting positive change in communities where we operate.
						</p>
						<p className="text-lg text-gray-700 mb-6 leading-relaxed">
							Our philanthropic efforts focus on education, cultural preservation, and community development, 
							building stronger, more resilient communities and creating opportunities for future generations.
						</p>

						{/* Impact Areas */}
						<div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-xl p-6 border border-rose-200/50">
							<h4 className="font-bold text-gray-900 mb-3 flex items-center">
								<Target className="w-5 h-5 text-rose-600 mr-2" />
								Focus Areas
							</h4>
							<div className="grid grid-cols-2 gap-3 text-sm">
								<div className="flex items-center">
									<div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Education & Scholarships</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Cultural Preservation</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Indigenous Support</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
									<span className="text-gray-700">Arts & Fashion</span>
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
							<img src={philanthropyImage} alt="Community engagement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
							<div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/20 to-transparent"></div>
							<div className="absolute bottom-8 left-8 right-8 text-white">
								<h3 className="text-2xl font-bold mb-3">Building Better Communities</h3>
								<p className="text-rose-100 mb-4">Supporting initiatives that create lasting positive impact across diverse communities</p>
								<div className="flex items-center space-x-6">
									<div className="text-center">
										<div className="text-xl font-bold">100%</div>
										<div className="text-xs text-rose-200">Impact Focus</div>
									</div>
									<div className="text-center">
										<div className="text-xl font-bold">15+</div>
										<div className="text-xs text-rose-200">Programs</div>
									</div>
								</div>
							</div>
							{/* Decorative corner */}
							<div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
								<Heart className="w-8 h-8 text-white" />
							</div>
						</div>
					</motion.div>
				</div>

				{/* Enhanced Program Cards */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div 
						className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-rose-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden" 
						variants={itemVariants}
					>
						<div className="h-48 bg-gradient-to-br from-rose-500 to-pink-600 relative overflow-hidden flex items-center justify-center">
							<GraduationCap className="h-16 w-16 text-white/90" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							<div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
								<span className="text-white font-bold text-sm">EDU</span>
							</div>
						</div>
						<div className="p-8">
							<h3 className="text-xl font-bold mb-4 text-gray-900">Hanrine Futures Scholarships</h3>
							<p className="text-gray-700 leading-relaxed mb-4">
								Indigenous scholarship and career development program providing education, mentoring support, 
								and employment opportunities from enrollment through career placement.
							</p>
							<div className="pt-4 border-t border-rose-100">
								<div className="flex items-center text-sm text-rose-600 font-semibold">
									<Users className="w-4 h-4 mr-2" />
									10 scholarships awarded since 2022
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div 
						className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-rose-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden" 
						variants={itemVariants}
					>
						<div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 relative overflow-hidden flex items-center justify-center">
							<Award className="h-16 w-16 text-white/90" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							<div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
								<span className="text-white font-bold text-sm">NAID</span>
							</div>
						</div>
						<div className="p-8">
							<h3 className="text-xl font-bold mb-4 text-gray-900">NAIDOC Sponsorship</h3>
							<p className="text-gray-700 leading-relaxed mb-4">
								Celebrating and honoring Aboriginal and Torres Strait Islander achievements through 
								strategic sponsorship of NAIDOC awards since 2012.
							</p>
							<div className="pt-4 border-t border-amber-100">
								<div className="flex items-center text-sm text-amber-600 font-semibold">
									<Globe className="w-4 h-4 mr-2" />
									Supporting cultural recognition since 2012
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div 
						className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-rose-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden" 
						variants={itemVariants}
					>
						<div className="h-48 bg-gradient-to-br from-purple-500 to-violet-600 relative overflow-hidden flex items-center justify-center">
							<Heart className="h-16 w-16 text-white/90" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							<div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
								<span className="text-white font-bold text-sm">ART</span>
							</div>
						</div>
						<div className="p-8">
							<h3 className="text-xl font-bold mb-4 text-gray-900">Brisbane Fashion Festival</h3>
							<p className="text-gray-700 leading-relaxed mb-4">
								Supporting emerging and First Nations designers through the Next Gen Group Show and 
								enabling Indigenous designers to showcase at New York Fashion Week.
							</p>
							<div className="pt-4 border-t border-purple-100">
								<div className="flex items-center text-sm text-purple-600 font-semibold">
									<Target className="w-4 h-4 mr-2" />
									Global platform for emerging talent
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Call to Action Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-r from-white/95 to-rose-50/95 backdrop-blur-sm p-10 rounded-3xl border border-rose-200/50 shadow-xl">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
							<div className="lg:col-span-2">
								<h3 className="text-3xl font-bold mb-6 text-gray-900">Creating Lasting Impact</h3>
								<p className="text-lg text-gray-700 mb-6 leading-relaxed">
									Through strategic partnerships with organizations like Madalah and continuous support 
									for cultural celebrations, Edge Access demonstrates its commitment to building stronger, 
									more inclusive communities for future generations.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-6">
									<div className="flex items-center">
										<div className="w-3 h-3 bg-rose-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Educational Excellence</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Cultural Preservation</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-rose-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Career Development</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
										<span className="text-gray-700">Community Empowerment</span>
									</div>
								</div>
							</div>
							<div className="text-center lg:text-right">
								<Link
									to="/projects"
									className="inline-flex items-center bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
								>
									Learn More About Our Impact
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