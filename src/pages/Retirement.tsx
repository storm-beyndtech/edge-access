import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import elderlyWoman from "../assets/Elderly-Woman.png";
import cryptoGlass from "../assets/Futuristic_Glass_Cube.png";
import nycHouse from "../assets/house-1.png";
import laHouse from "../assets/house-2.png";
import sfHouse from "../assets/house-3.png";
import miamiHouse from "../assets/house-4.png";
import torontoHouse from "../assets/house-5.png";
import luxuryHouse from "../assets/house-6.png";

const Retirement: React.FC = () => {
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
							Retirement Solutions
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-white text-lg leading-relaxed mb-8"
						>
							Secure your financial future with comprehensive retirement solutions and real estate investments.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<Link to="/login">
								<button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
									Start Retirement Planning <ChevronRight className="w-5 h-5" />
								</button>
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Overview Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Wealth Preservation & Growth</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Everything we do is focused on preserving and growing wealth. To meet our clients' expanding
							global needs, we offer private wealth planning services that transcend borders and deliver
							consistent long-term returns.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Strategic Wealth Management</h3>
							<div className="space-y-4">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
											<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-semibold text-gray-900">Diversified Portfolio Approach</h4>
										<p className="text-gray-600">
											Strategic allocation across mining, agriculture, energy, and real estate sectors
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
											<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-semibold text-gray-900">Global Investment Opportunities</h4>
										<p className="text-gray-600">
											Access to international markets and cross-border investment solutions
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
											<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-semibold text-gray-900">Risk Management</h4>
										<p className="text-gray-600">
											Conservative approach balanced with growth opportunities for sustainable returns
										</p>
									</div>
								</div>
							</div>
						</div>
						<div>
							<img
								src={elderlyWoman}
								alt="Retirement Investment Planning"
								className="rounded-lg shadow-lg w-full h-96 object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Investment Performance Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Investment Performance</h2>
							<p className="text-lg text-gray-600 mb-6">
								Over 30 years of experience in wealth management has delivered consistent returns for our retirement
								planning clients through disciplined investment strategies and diversified portfolio management.
							</p>
							<div className="space-y-4">
								<div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm">
									<span className="text-gray-600">Average Annual Return</span>
									<span className="font-semibold text-emerald-600 text-lg">12.5%</span>
								</div>
								<div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm">
									<span className="text-gray-600">Years of Experience</span>
									<span className="font-semibold text-gray-900 text-lg">30+</span>
								</div>
								<div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm">
									<span className="text-gray-600">Portfolio Diversification</span>
									<span className="font-semibold text-blue-600 text-lg">4 Sectors</span>
								</div>
							</div>
						</div>
						<div>
							<div className="bg-emerald-50 rounded-lg p-8">
								<h3 className="text-2xl font-semibold text-gray-900 mb-6">Capital Deployment</h3>
								<div className="space-y-4">
								<div className="flex justify-between items-center border-b border-emerald-200 pb-2">
									<span className="text-gray-600">Capital Placements (Annual)</span>
									<span className="font-semibold text-emerald-600 text-lg">$5B</span>
								</div>
								<div className="flex justify-between items-center border-b border-emerald-200 pb-2">
									<span className="text-gray-600">Global Clients Served</span>
									<span className="font-semibold text-gray-900 text-lg">1000+</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Success Rate</span>
									<span className="font-semibold text-emerald-600 text-lg">98%</span>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Investment Options Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Retirement Investment Options</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Choose from a range of retirement investment solutions tailored to your risk tolerance, time
							horizon, and financial objectives.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
							<div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Conservative Growth</h3>
							<p className="text-gray-600 mb-4">
								Low-risk investment strategy focusing on capital preservation with modest growth potential
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" 60% Fixed Income Securities</li>
								<li>" 25% Blue-chip Equities</li>
								<li>" 15% Real Estate Investment</li>
								<li>" Target Return: 6-8% annually</li>
							</ul>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
							<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Balanced Portfolio</h3>
							<p className="text-gray-600 mb-4">
								Moderate risk approach balancing growth potential with capital protection
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" 40% Growth Equities</li>
								<li>" 30% Fixed Income</li>
								<li>" 20% Commodity Investments</li>
								<li>" 10% Alternative Assets</li>
								<li>" Target Return: 9-12% annually</li>
							</ul>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
							<div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Focused</h3>
							<p className="text-gray-600 mb-4">
								Higher risk strategy for long-term investors seeking maximum growth potential
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" 50% Growth & Emerging Markets</li>
								<li>" 25% Mining & Energy Sectors</li>
								<li>" 15% Technology Innovation</li>
								<li>" 10% Venture Capital</li>
								<li>" Target Return: 12-15% annually</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Prime Real Estate Investment Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Prime Real Estate Investment</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Diversify your retirement portfolio with strategic real estate investments in the top performing 
							markets across the United States and Canada through Edge Access's exclusive opportunities.
						</p>
					</div>

					{/* Top US Cities */}
					<div className="mb-16">
						<h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Top 4 US Investment Markets</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
								{/* NYC Housing Image */}
								<div className="h-48 relative overflow-hidden">
									<img src={nycHouse} alt="NYC Real Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
									<div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
										<span className="text-white font-bold">NYC</span>
									</div>
									<div className="absolute bottom-4 left-4 text-white">
										<h4 className="text-lg font-bold">Manhattan Skyline</h4>
										<p className="text-sm opacity-90">Premium Properties</p>
									</div>
								</div>
								<div className="p-6">
									<h4 className="text-xl font-bold text-gray-900 mb-2">New York City</h4>
									<p className="text-gray-600 mb-4">Manhattan & Brooklyn luxury properties with strong appreciation potential</p>
									<div className="space-y-2">
										<div className="flex justify-between">
											<span className="text-sm text-gray-500">Avg. ROI</span>
											<span className="text-sm font-semibold text-green-600">8.5%</span>
										</div>
										<div className="flex justify-between">
											<span className="text-sm text-gray-500">Market Growth</span>
											<span className="text-sm font-semibold text-blue-600">12%</span>
										</div>
									</div>
								</div>
							</div>
							
							<div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
								{/* LA Housing Image */}
								<div className="h-48 relative overflow-hidden">
									<img src={laHouse} alt="LA Real Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
									<div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
										<span className="text-white font-bold">LA</span>
									</div>
									<div className="absolute bottom-4 left-4 text-white">
										<h4 className="text-lg font-bold">Beverly Hills</h4>
										<p className="text-sm opacity-90">Luxury Estates</p>
									</div>
								</div>
								<div className="p-6">
									<h4 className="text-xl font-bold text-gray-900 mb-2">Los Angeles</h4>
									<p className="text-gray-600 mb-4">Beverly Hills & Santa Monica premium residential investments</p>
									<div className="space-y-2">
										<div className="flex justify-between">
											<span className="text-sm text-gray-500">Avg. ROI</span>
											<span className="text-sm font-semibold text-green-600">7.8%</span>
										</div>
										<div className="flex justify-between">
											<span className="text-sm text-gray-500">Market Growth</span>
											<span className="text-sm font-semibold text-blue-600">10%</span>
										</div>
									</div>
								</div>
							</div>

							<div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
								{/* SF Housing Image */}
								<div className="h-48 relative overflow-hidden">
									<img src={sfHouse} alt="SF Real Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
									<div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
										<span className="text-white font-bold">SF</span>
									</div>
									<div className="absolute bottom-4 left-4 text-white">
										<h4 className="text-lg font-bold">Silicon Valley</h4>
										<p className="text-sm opacity-90">Tech Properties</p>
									</div>
								</div>
								<div className="p-6">
									<h4 className="text-xl font-bold text-gray-900 mb-2">San Francisco</h4>
									<p className="text-gray-600 mb-4">Tech hub properties with innovative investment opportunities</p>
									<div className="space-y-2">
										<div className="flex justify-between">
											<span className="text-sm text-gray-500">Avg. ROI</span>
											<span className="text-sm font-semibold text-green-600">9.2%</span>
										</div>
										<div className="flex justify-between">
											<span className="text-sm text-gray-500">Market Growth</span>
											<span className="text-sm font-semibold text-blue-600">15%</span>
										</div>
									</div>
								</div>
							</div>

							<div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
								{/* Miami Housing Image */}
								<div className="h-48 relative overflow-hidden">
									<img src={miamiHouse} alt="Miami Real Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
									<div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
										<span className="text-white font-bold">MIA</span>
									</div>
									<div className="absolute bottom-4 left-4 text-white">
										<h4 className="text-lg font-bold">South Beach</h4>
										<p className="text-sm opacity-90">Waterfront Condos</p>
									</div>
								</div>
								<div className="p-6">
									<h4 className="text-xl font-bold text-gray-900 mb-2">Miami</h4>
									<p className="text-gray-600 mb-4">Waterfront luxury condos and emerging neighborhood developments</p>
									<div className="space-y-2">
										<div className="flex justify-between">
											<span className="text-sm text-gray-500">Avg. ROI</span>
											<span className="text-sm font-semibold text-green-600">8.9%</span>
										</div>
										<div className="flex justify-between">
											<span className="text-sm text-gray-500">Market Growth</span>
											<span className="text-sm font-semibold text-blue-600">14%</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Top Canadian City */}
					<div>
						<h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Premier Canadian Market</h3>
						<div className="max-w-3xl mx-auto">
							<div className="group relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
								{/* Toronto Housing Image */}
								<div className="h-64 relative overflow-hidden">
									<img src={torontoHouse} alt="Toronto Real Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
									<div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
										<span className="text-white font-bold text-lg">TOR</span>
									</div>
									<div className="absolute bottom-6 left-6 text-white">
										<h4 className="text-2xl font-bold">CN Tower District</h4>
										<p className="text-lg opacity-90">Financial Capital</p>
									</div>
								</div>
								<div className="p-8">
									<h4 className="text-3xl font-bold text-gray-900 mb-4">Toronto</h4>
									<p className="text-lg text-gray-600 mb-6">
										Canada's financial capital offering diverse real estate opportunities from downtown condos to 
										suburban family homes with consistent appreciation and rental income potential.
									</p>
									<div className="grid grid-cols-3 gap-6">
										<div className="text-center bg-green-50 rounded-lg p-4">
											<div className="text-2xl font-bold text-green-600 mb-1">11.2%</div>
											<p className="text-sm text-gray-500">Average ROI</p>
										</div>
										<div className="text-center bg-blue-50 rounded-lg p-4">
											<div className="text-2xl font-bold text-blue-600 mb-1">16%</div>
											<p className="text-sm text-gray-500">Market Growth</p>
										</div>
										<div className="text-center bg-purple-50 rounded-lg p-4">
											<div className="text-2xl font-bold text-purple-600 mb-1">C$1.2M</div>
											<p className="text-sm text-gray-500">Avg. Property Value</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Premium Real Estate Showcase */}
					<div className="mt-16">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div className="relative">
								<div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
									<img src={luxuryHouse} alt="Luxury Real Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
									<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent"></div>
									<div className="absolute bottom-8 left-8 right-8 text-white">
										<h3 className="text-2xl font-bold mb-3">Premium Housing Portfolio</h3>
										<p className="text-emerald-100 mb-4">Exclusive access to luxury residential investments across prime markets</p>
									</div>
									<div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
										<span className="text-white font-bold">★</span>
									</div>
								</div>
							</div>
							<div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
								<h3 className="text-2xl font-semibold text-gray-900 mb-6">Real Estate Tokenization Benefits</h3>
								<div className="grid grid-cols-2 gap-6">
									<div className="text-center bg-white/70 rounded-lg p-4">
										<div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
										<p className="text-gray-600">Trading Access</p>
									</div>
									<div className="text-center bg-white/70 rounded-lg p-4">
										<div className="text-3xl font-bold text-emerald-600 mb-2">Global</div>
										<p className="text-gray-600">Market Reach</p>
									</div>
									<div className="text-center bg-white/70 rounded-lg p-4">
										<div className="text-3xl font-bold text-emerald-600 mb-2">Instant</div>
										<p className="text-gray-600">Settlement</p>
									</div>
									<div className="text-center bg-white/70 rounded-lg p-4">
										<div className="text-3xl font-bold text-emerald-600 mb-2">Low</div>
										<p className="text-gray-600">Transaction Costs</p>
									</div>
								</div>
								<div className="mt-6 p-4 bg-white/50 rounded-lg">
									<p className="text-sm text-gray-700 leading-relaxed">
										Real estate tokenization combines traditional property investments with blockchain technology, 
										providing enhanced transparency, increased liquidity, and lower barriers to entry for premium 
										real estate investments across global markets.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Planning Services Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Retirement Planning</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Our retirement planning services extend beyond investment management to include comprehensive
							financial planning, tax optimization, and estate planning solutions.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-emerald-600 mb-2">$5B</div>
							<p className="text-gray-600">Annual Capital Placements</p>
							<p className="text-sm text-gray-500 mt-1">Since 1992</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
							<p className="text-gray-600">Years Experience</p>
							<p className="text-sm text-gray-500 mt-1">Proven Track Record</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
							<p className="text-gray-600">Satisfied Clients</p>
							<p className="text-sm text-gray-500 mt-1">Global Reach</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-orange-600 mb-2">4</div>
							<p className="text-gray-600">Investment Sectors</p>
							<p className="text-sm text-gray-500 mt-1">Diversified Portfolio</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="py-16 bg-emerald-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
					<h2 className="text-3xl font-bold text-white mb-6">Start Planning Your Financial Future Today</h2>
					<p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
						Connect with our retirement planning specialists to develop a personalized investment strategy
						that aligns with your long-term financial goals.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							Schedule Consultation
						</button>
						<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition-colors">
							Download Retirement Guide
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Retirement;
