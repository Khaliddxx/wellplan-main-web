'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calculator, DollarSign, Clock, TrendingUp, Users, ArrowRight, Check, Zap } from 'lucide-react';
import { useTranslations } from '../lib/translations';

export default function ROICalculatorPage() {
  const t = useTranslations('roiPage');
  
  // Input states - realistic defaults for a small/medium business
  const [monthlyLeads, setMonthlyLeads] = useState(200);
  const [avgDealValue, setAvgDealValue] = useState(500);
  const [closeRate, setCloseRate] = useState(15);
  const [hoursOnManualTasks, setHoursOnManualTasks] = useState(25);
  const [hourlyRate, setHourlyRate] = useState(40);
  const [currentTools, setCurrentTools] = useState(4);
  const [avgToolCost, setAvgToolCost] = useState(75);

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
    
    // Projected improvements with WellPlan (conservative, industry-backed estimates)
    // - 10-15% close rate improvement through better follow-up automation
    // - 8-12% more leads captured through multi-channel capture
    const improvedCloseRate = closeRate * 1.12; // 12% improvement in close rate
    const improvedLeadCapture = monthlyLeads * 1.10; // 10% more leads captured
    const projectedRevenue = improvedLeadCapture * (improvedCloseRate / 100) * avgDealValue;
    const revenueIncrease = projectedRevenue - currentMonthlyRevenue;
    
    // Time savings (40% reduction in manual tasks through automation)
    const timeSavedHours = hoursOnManualTasks * 0.40;
    const laborSavings = timeSavedHours * hourlyRate * 4; // Monthly (4 weeks)
    
    // Tool consolidation savings
    const currentToolCost = currentTools * avgToolCost;
    const wellplanCost = 397; // Unlimited AI plan
    const toolSavings = Math.max(0, currentToolCost - wellplanCost);
    
    // Total monthly savings (only count positive values)
    const totalSavings = Math.max(0, revenueIncrease) + laborSavings + Math.max(0, toolSavings);
    
    // ROI calculation (annual net benefit vs annual cost)
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
              <span className="text-sm font-semibold text-emerald-400">{t('badge')}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              {t('headline')} <span className="bg-gradient-to-r from-emerald-400 to-[#214CE5] bg-clip-text text-transparent">{t('headlineHighlight')}</span>
            </h1>
            
            <p className="text-xl text-gray-400">
              {t('description')}
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
                {t('businessMetrics')}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">{t('monthlyLeads')}</label>
                    <span className="text-sm font-semibold text-white">{monthlyLeads.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="2000"
                    step="25"
                    value={monthlyLeads}
                    onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#214CE5]"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>25</span>
                    <span>2,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">{t('avgDealValue')}</label>
                    <span className="text-sm font-semibold text-white">{formatCurrency(avgDealValue)}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="10000"
                    step="50"
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#214CE5]"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>$50</span>
                    <span>$10,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">{t('currentCloseRate')}</label>
                    <span className="text-sm font-semibold text-white">{closeRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="40"
                    step="1"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#214CE5]"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>2%</span>
                    <span>40%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#111111] border border-white/10">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-400" />
                {t('timeCosts')}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">{t('hoursManualTasks')}</label>
                    <span className="text-sm font-semibold text-white">{hoursOnManualTasks} {t('hours')}/week</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="5"
                    value={hoursOnManualTasks}
                    onChange={(e) => setHoursOnManualTasks(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>5 hrs</span>
                    <span>50 hrs</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">{t('yourHourlyRate')}</label>
                    <span className="text-sm font-semibold text-white">{formatCurrency(hourlyRate)}{t('perHour')}</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="150"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>$15</span>
                    <span>$150</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">{t('numCurrentTools')}</label>
                    <span className="text-sm font-semibold text-white">{currentTools} {t('tools')}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={currentTools}
                    onChange={(e) => setCurrentTools(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>1</span>
                    <span>12</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-400">{t('avgToolCost')}</label>
                    <span className="text-sm font-semibold text-white">{formatCurrency(avgToolCost)}{t('perMonth')}</span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="300"
                    step="25"
                    value={avgToolCost}
                    onChange={(e) => setAvgToolCost(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>$25</span>
                    <span>$300</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* ROI Summary Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#214CE5]/20 to-emerald-500/20 border border-[#214CE5]/30">
              <div className="text-center mb-8">
                <div className="text-sm text-gray-400 mb-2">{t('estimatedROI')}</div>
                <div className="text-6xl font-black bg-gradient-to-r from-emerald-400 to-[#214CE5] bg-clip-text text-transparent">
                  {results.roi.toFixed(0)}%
                </div>
                <div className="text-gray-400 mt-2">{t('returnOnInvestment')}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/30">
                  <div className="text-sm text-gray-400 mb-1">{t('monthlySavings')}</div>
                  <div className="text-2xl font-bold text-emerald-400">
                    {formatCurrency(results.totalSavings)}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-black/30">
                  <div className="text-sm text-gray-400 mb-1">{t('annualSavings')}</div>
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
                      <div className="text-sm text-gray-400">{t('revenueIncrease')}</div>
                      <div className="text-xs text-gray-600">{t('revenueIncreaseDesc')}</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-emerald-400">
                    +{formatCurrency(results.revenueIncrease)}{t('perMonth')}
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
                      <div className="text-sm text-gray-400">{t('timeSaved')}</div>
                      <div className="text-xs text-gray-600">{t('timeSavedDesc').replace('{hours}', results.timeSaved.toFixed(0))}</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-purple-400">
                    +{formatCurrency(results.laborSavings)}{t('perMonth')}
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
                      <div className="text-sm text-gray-400">{t('toolConsolidation')}</div>
                      <div className="text-xs text-gray-600">{t('toolConsolidationDesc').replace('{count}', currentTools)}</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-[#6B8EFF]">
                    +{formatCurrency(results.toolSavings)}{t('perMonth')}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#214CE5]" />
                {t('readyResults')}
              </h3>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  {t('freeTrial')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  {t('freeMigration')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  {t('dedicatedOnboarding')}
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/demo"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#214CE5] hover:bg-[#1a3db8] text-white font-semibold rounded-xl transition"
                >
                  {t('startFreeTrial')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/demo"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition"
                >
                  {t('bookDemo')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Note */}
        <div className="mt-16 p-6 rounded-xl bg-[#111111] border border-white/10">
          <h4 className="font-semibold mb-2">{t('methodologyTitle')}</h4>
          <p className="text-sm text-gray-500">
            {t('methodologyText')}
          </p>
        </div>
      </div>
    </div>
  );
}
