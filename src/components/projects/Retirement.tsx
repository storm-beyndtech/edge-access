import { motion } from "framer-motion";
import { TrendingUp, Home, Globe, DollarSign } from "lucide-react";
import elderlyWoman from "../../assets/Elderly-Woman.png";

export default function Retirement() {
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
		<section id="retirement" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mb-8 sm:mb-12"
				>
					<div className="flex items-center mb-4">
						<div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
							<TrendingUp className="w-6 h-6 text-white" />
						</div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Retirement Solutions</h2>
					</div>
					<div className="w-24 h-1 bg-emerald-600 rounded mb-6"></div>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-6 mb-6">
							<h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
								<Home className="w-5 h-5 text-emerald-600 mr-2" />
								Prime Real Estate Markets
							</h3>
							<div className="grid grid-cols-2 gap-3">
								<div className="bg-white rounded-lg p-3 text-center">
									<div className="text-lg font-bold text-blue-600">NYC</div>
									<div className="text-xs text-gray-600">8.5% ROI</div>
								</div>
								<div className="bg-white rounded-lg p-3 text-center">
									<div className="text-lg font-bold text-orange-600">LA</div>
									<div className="text-xs text-gray-600">7.8% ROI</div>
								</div>
								<div className="bg-white rounded-lg p-3 text-center">
									<div className="text-lg font-bold text-green-600">SF</div>
									<div className="text-xs text-gray-600">9.2% ROI</div>
								</div>
								<div className="bg-white rounded-lg p-3 text-center">
									<div className="text-lg font-bold text-red-600">TOR</div>
									<div className="text-xs text-gray-600">11.2% ROI</div>
								</div>
							</div>
						</div>

						<p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
							Edge Access's comprehensive retirement investment strategies are designed to preserve and 
							grow wealth through diversified global portfolio management. Our approach includes strategic 
							real estate investments in top performing markets across the United States and Canada.
						</p>
						<p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
							With over 30 years of experience in wealth management, we have delivered consistent returns 
							for our retirement planning clients through disciplined investment strategies, achieving 
							an average annual return of 12.5% across diversified portfolios.
						</p>
						<p className="text-sm sm:text-base text-gray-700">
							Our real estate tokenization approach combines traditional property investments with 
							blockchain technology, providing enhanced transparency, increased liquidity, and lower 
							barriers to entry for premium real estate investments.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-xl"
					>
						<img src={elderlyWoman} alt="Retirement planning" className="w-full h-full object-cover" />
						<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent flex flex-col justify-end p-4 sm:p-6">
							<h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">
								Secure Financial Future
							</h3>
							<p className="text-white/80 text-sm sm:text-base">
								Comprehensive retirement planning with global investment opportunities
							</p>
						</div>
					</motion.div>
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-emerald-200" variants={itemVariants}>
						<DollarSign className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600 mb-3 sm:mb-4" />
						<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Portfolio Performance</h3>
						<p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
							Proven track record with $5B annual capital placements and consistent 12.5% average 
							annual returns across diversified investment portfolios.
						</p>
						<div className="grid grid-cols-2 gap-2">
							<div className="bg-emerald-50 rounded p-2 text-center">
								<div className="text-sm font-bold text-emerald-600">12.5%</div>
								<div className="text-xs text-emerald-700">Avg. Annual Return</div>
							</div>
							<div className="bg-blue-50 rounded p-2 text-center">
								<div className="text-sm font-bold text-blue-600">30+</div>
								<div className="text-xs text-blue-700">Years Experience</div>
							</div>
						</div>
					</motion.div>

					<motion.div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-emerald-200" variants={itemVariants}>
						<Home className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600 mb-3 sm:mb-4" />
						<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Real Estate Focus</h3>
						<p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
							Strategic investments in top US cities (NYC, LA, SF, Miami) and Canada's premier 
							market (Toronto) with tokenization for enhanced liquidity.
						</p>
						<div className="space-y-1">
							<div className="flex justify-between text-xs">
								<span className="text-gray-600">Top US ROI:</span>
								<span className="font-semibold text-green-600">9.2% (SF)</span>
							</div>
							<div className="flex justify-between text-xs">
								<span className="text-gray-600">Canada Leader:</span>
								<span className="font-semibold text-red-600">11.2% (Toronto)</span>
							</div>
							<div className="flex justify-between text-xs">
								<span className="text-gray-600">Market Growth:</span>
								<span className="font-semibold text-blue-600">12-16%</span>
							</div>
						</div>
					</motion.div>

					<motion.div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-emerald-200" variants={itemVariants}>
						<Globe className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600 mb-3 sm:mb-4" />
						<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Global Reach</h3>
						<p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
							International investment opportunities with cross-border solutions and access 
							to global markets through our extensive network.
						</p>
						<div className="bg-emerald-50 rounded-lg p-3">
							<div className="grid grid-cols-2 gap-2 text-center">
								<div>
									<div className="text-sm font-bold text-emerald-600">1000+</div>
									<div className="text-xs text-emerald-700">Global Clients</div>
								</div>
								<div>
									<div className="text-sm font-bold text-emerald-600">98%</div>
									<div className="text-xs text-emerald-700">Success Rate</div>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}