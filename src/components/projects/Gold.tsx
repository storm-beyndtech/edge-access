import { motion } from "framer-motion";
import { Shield, TrendingUp, Globe, Award } from "lucide-react";
import goldImage from "../../assets/Gold-1.jpg";

export default function Gold() {
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
		<section id="gold" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mb-8 sm:mb-12"
				>
					<div className="flex items-center mb-4">
						<div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
							<Shield className="w-6 h-6 text-white" />
						</div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Gold Investment Excellence</h2>
					</div>
					<div className="w-24 h-1 bg-yellow-500 rounded mb-6"></div>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl p-6 mb-6">
							<h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
								<Award className="w-5 h-5 text-yellow-600 mr-2" />
								Premium Gold Purity Standards
							</h3>
							<div className="grid grid-cols-2 gap-4">
								<div className="text-center bg-white rounded-lg p-4">
									<div className="text-2xl font-bold text-yellow-600">98%</div>
									<p className="text-sm text-gray-600">Standard Purity</p>
								</div>
								<div className="text-center bg-white rounded-lg p-4">
									<div className="text-2xl font-bold text-yellow-600">99.9%</div>
									<p className="text-sm text-gray-600">Premium Variants</p>
								</div>
							</div>
						</div>

						<p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
							Edge Access partners with Africa's largest gold-producing region, leveraging strategic partnerships 
							in Ghana's gold sector to deliver exceptional investment opportunities. Our refined gold achieves 
							98% purity as standard, with premium variants reaching 99.9% purity.
						</p>
						<p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
							Incorporated in 2016, our partner represents a prestigious player in Ghana's gold sector, 
							fueled by unwavering dedication to bolster the economic and communal prosperity of the region. 
							We are pursuing LBMA certification to become the first certified refinery in Ghana.
						</p>
						<p className="text-sm sm:text-base text-gray-700">
							Our refinery is a forerunner in the region by introducing bullion hallmark and crafted 
							minted gold coins, catering to discerning markets both locally and globally with 
							international operations spanning UK, Austria, Amsterdam, Dubai, and Mauritius.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-xl"
					>
						<img src={goldImage} alt="Gold refining operations" className="w-full h-full object-cover" />
						<div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 to-transparent flex flex-col justify-end p-4 sm:p-6">
							<h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">
								Premium Gold Refining
							</h3>
							<p className="text-white/80 text-sm sm:text-base">
								State-of-the-art facilities producing 98% pure gold with global market access
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
					<motion.div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-yellow-200" variants={itemVariants}>
						<Shield className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-600 mb-3 sm:mb-4" />
						<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Quality Assurance</h3>
						<p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
							ISO certified Lab (ISO/IEC 17025:2017) ensuring consistent delivery of high-quality 
							services with all crucial GSA certifications.
						</p>
						<div className="bg-yellow-50 rounded-lg p-3">
							<p className="text-sm font-semibold text-yellow-800">LBMA Certification Pursuit</p>
							<p className="text-xs text-yellow-700">Trailblazing to be Ghana's first certified refinery</p>
						</div>
					</motion.div>

					<motion.div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-yellow-200" variants={itemVariants}>
						<TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-600 mb-3 sm:mb-4" />
						<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Investment Performance</h3>
						<p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
							Strategic positioning in gold markets with strong investment returns through 
							diversified precious metals portfolio management.
						</p>
						<div className="grid grid-cols-2 gap-2">
							<div className="bg-green-50 rounded p-2 text-center">
								<div className="text-sm font-bold text-green-600">Market Leader</div>
								<div className="text-xs text-green-700">Africa's No. 1</div>
							</div>
							<div className="bg-blue-50 rounded p-2 text-center">
								<div className="text-sm font-bold text-blue-600">Since 2019</div>
								<div className="text-xs text-blue-700">Partnership Est.</div>
							</div>
						</div>
					</motion.div>

					<motion.div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-yellow-200" variants={itemVariants}>
						<Globe className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-600 mb-3 sm:mb-4" />
						<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Global Operations</h3>
						<p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
							International reach with strategic operations spanning multiple continents and 
							key financial centers worldwide.
						</p>
						<div className="space-y-1">
							<div className="flex justify-between text-xs">
								<span className="text-gray-600">Primary Mining:</span>
								<span className="font-semibold text-gray-800">Ghana</span>
							</div>
							<div className="flex justify-between text-xs">
								<span className="text-gray-600">Global Hubs:</span>
								<span className="font-semibold text-gray-800">UK, Austria, Dubai</span>
							</div>
							<div className="flex justify-between text-xs">
								<span className="text-gray-600">Trading Centers:</span>
								<span className="font-semibold text-gray-800">Amsterdam, Mauritius</span>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}