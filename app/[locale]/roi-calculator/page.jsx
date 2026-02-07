'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calculator, DollarSign, Clock, TrendingUp, Users, ArrowRight, Check, Zap } from 'lucide-react';

export default function ROICalculatorPage() {
  // Input states
  const [monthlyLeads, setMonthlyLeads] = useState(500);
  const [avgDealValue, setAvgDealValue] = useState(1000);
  const [closeRate, setCloseRate] = useState(10);
  const [hoursOnManualTasks, setHoursOnManualTasks] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [currentTools, setCurrentTools] = useState(5);
  const [avgToolCost, setAvgToolCost] = useState(100);

  // Calculated results
  const [results, setResults] = useState({
    currentRevenue: 0,
    projectedRevenue: 0,
    revenueIncrease: 0,
    timeSaved: 0,
    laborSavings: 0,
    toolSavings: 0,
    totalSavings: 0,
    roi: 0,
  });

  useEffect(() => {
    // Calculate current metrics
    const currentMonthlyRevenue = monthlyLeads * (closeRate / 100) * avgDealValue;
    
    // Projected improvements with WellPlan
    const improvedCloseRate = closeRate * 1.25; // 25% improvement in close rate
    const improvedLeadCapture = monthlyLeads * 1.15; // 15% more leads captured
    const projectedRevenue = improvedLeadCapture * (improvedCloseRate / 100) * avgDealValue;
    const revenueIncrease = projectedRevenue - currentMonthlyRevenue;
    
    // Time savings (60% reduction in manual tasks)
    const timeSavedHours = hoursOnManualTasks * 0.6;
    const laborSavings = timeSavedHours * hourlyRate * 4; // Monthly
    
    // Tool consolidation savings
    const currentToolCost = currentTools * avgToolCost;
    const wellplanCost = 97; // Base plan
    const toolSavings = Math.max(0, currentToolCost - wellplanCost);
    
    // Total monthly savings
    const totalSavings = revenueIncrease + laborSavings + toolSavings;
    
    // ROI calculation (annual savings vs annual cost)
    const annualSavings = totalSavings * 12;
    const annualCost = wellplanCost * 12;
    const roi = annualCost > 0 ? ((annualSavings - annualCost) / annualCost) * 100 : 0;

    setResults({
      currentRevenue: currentMonthlyRevenue,
      projectedRevenue,
      revenueIncrease,
      timeSaved: timeSavedHours,
      laborSavings,
      toolSavings,
      totalSavings,
      roi,
    });
  }, [monthlyLeads, avgDealValue, closeRate, hoursOnManualTasks, hourlyRate, currentTools, avgToolCost]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214CE5]/20 via-transparent to-emerald-500/10" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#214CE5]/20 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400">ROI Calculator</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Calculate Your <span className="bg-gradient-to-r from-emerald-400 to-[#214CE5] bg-clip-text text-transparent">Potential Savings</span>
            </h1>
            
            <p className="text-xl text-gray-400">
              See exactly how much time and money WellPlan can save your business every month.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-[#111111] border border-white/10">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-5 h-5 text-[#214CE5]" />
                Your Business Metrics
              </h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">Monthly Leads</label>
                    <span className="text-sm font-semibold text-white">{monthlyLeads.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={monthlyLeads}
                    onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#214CE5]"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>50</span>
                    <span>5,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">Average Deal Value</label>
                    <span className="text-sm font-semibold text-white">{formatCurrency(avgDealValue)}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="50000"
                    step="100"
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#214CE5]"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>$100</span>
                    <span>$50,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">Current Close Rate</label>
                    <span className="text-sm font-semibold text-white">{closeRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#214CE5]"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>1%</span>
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#111111] border border-white/10">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-400" />
                Time & Costs
              </h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">Hours on Manual Tasks (per week)</label>
                    <span className="text-sm font-semibold text-white">{hoursOnManualTasks} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={hoursOnManualTasks}
                    onChange={(e) => setHoursOnManualTasks(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">Your Hourly Rate</label>
                    <span className="text-sm font-semibold text-white">{formatCurrency(hourlyRate)}/hr</span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="250"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">Number of Current Tools</label>
                    <span className="text-sm font-semibold text-white">{currentTools} tools</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={currentTools}
                    onChange={(e) => setCurrentTools(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">Avg. Monthly Cost per Tool</label>
                    <span className="text-sm font-semibold text-white">{formatCurrency(avgToolCost)}/mo</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={avgToolCost}
                    onChange={(e) => setAvgToolCost(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* ROI Summary Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#214CE5]/20 to-emerald-500/20 border border-[#214CE5]/30">
              <div className="text-center mb-8">
                <div className="text-sm text-gray-400 mb-2">Your Estimated Monthly ROI</div>
                <div className="text-6xl font-black bg-gradient-to-r from-emerald-400 to-[#214CE5] bg-clip-text text-transparent">
                  {results.roi.toFixed(0)}%
                </div>
                <div className="text-gray-400 mt-2">return on investment</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/30">
                  <div className="text-sm text-gray-400 mb-1">Monthly Savings</div>
                  <div className="text-2xl font-bold text-emerald-400">
                    {formatCurrency(results.totalSavings)}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-black/30">
                  <div className="text-sm text-gray-400 mb-1">Annual Savings</div>
                  <div className="text-2xl font-bold text-white">
                    {formatCurrency(results.totalSavings * 12)}
                  </div>
                </div>
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 rounded-2xl bg-[#111111] border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Revenue Increase</div>
                      <div className="text-xs text-gray-600">25% better close rate + 15% more leads</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-emerald-400">
                    +{formatCurrency(results.revenueIncrease)}/mo
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#111111] border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Time Saved</div>
                      <div className="text-xs text-gray-600">{results.timeSaved.toFixed(0)} hours/week automated</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-purple-400">
                    +{formatCurrency(results.laborSavings)}/mo
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#111111] border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#214CE5]/20 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-[#6B8EFF]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Tool Consolidation</div>
                      <div className="text-xs text-gray-600">Replace {currentTools} tools with WellPlan</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-[#6B8EFF]">
                    +{formatCurrency(results.toolSavings)}/mo
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#214CE5]" />
                Ready to see these results?
              </h3>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  14-day free trial, no credit card required
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Free migration from your current tools
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Dedicated onboarding specialist
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/demo"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#214CE5] hover:bg-[#1a3db8] text-white font-semibold rounded-xl transition"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/demo"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Note */}
        <div className="mt-16 p-6 rounded-xl bg-[#111111] border border-white/10">
          <h4 className="font-semibold mb-2">How we calculate these estimates:</h4>
          <p className="text-sm text-gray-500">
            Our ROI calculator uses industry-average improvement rates based on data from thousands of WellPlan customers. 
            Actual results may vary based on your industry, current processes, and implementation. The estimates assume:
            25% improvement in close rates through better lead nurturing and follow-up, 15% increase in captured leads through 
            omnichannel engagement, and 60% reduction in manual tasks through automation.
          </p>
        </div>
      </div>
    </div>
  );
}
