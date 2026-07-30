---
title: "What GRACE Gravity Data Can Tell Us About Drought in the Horn of Africa"
date: 2025-02-01
tags: ["Drought", "Remote Sensing", "Research"]
description: "How measuring tiny changes in Earth's gravitational field from space gives us one of the best tools for monitoring terrestrial water storage - and drought - at continental scale."
readTime: 9
---

<p>The Horn of Africa is no stranger to drought. The region experiences some of the most severe and recurrent drought cycles on the planet, affecting food security and livelihoods for hundreds of millions of people. Yet monitoring drought here is genuinely difficult - ground-based hydrological station networks are sparse, and satellite optical imagery tells you about the land surface but not what's happening underground.</p>
<h2>Enter GRACE - Gravity Recovery and Climate Experiment</h2>
<p>GRACE and its successor GRACE-FO are perhaps the most underappreciated satellite missions in earth observation. Instead of imaging the land surface, they measure tiny changes in Earth's gravitational field caused by shifting masses of water. When groundwater is depleted, when soil moisture drops, when lakes shrink - the mass of water in that region decreases, and GRACE detects it.</p>
<blockquote>GRACE is essentially a scale for the planet. It weighs water - and it tells us when water is disappearing.</blockquote>
<h2>Building the GHDI - A Multi-Variate Drought Index</h2>
<p>For my MSc thesis, I developed the GHDI (Greater Horn Drought Index) - a probabilistic drought index that integrates GRACE Terrestrial Water Storage (TWS) anomalies with precipitation, evapotranspiration, and soil moisture data. The core challenge with existing indices like SPI is that they're univariate - they measure one variable at a time. Real drought is multivariate: groundwater, soil moisture, and atmospheric demand all contribute simultaneously.</p>
<div class="callout"><strong>Copula modelling</strong> allows you to model the joint probability distribution of multiple correlated variables - capturing the combined drought signal that no single variable can represent alone. This is the mathematical foundation of the GHDI.</div>
<h2>Validation Against FEWS NET</h2>
<p>The GHDI was validated against FEWS NET (Famine Early Warning Systems Network) drought classifications - the gold standard for humanitarian drought assessment in the region. The index showed strong correspondence with documented drought events, including the 2010-2011 and 2016-2017 droughts, which were among the most severe in recorded history for the Horn.</p>
<ul>
  <li>GHDI captured drought onset 1-3 months earlier than SPI in several test periods</li>
  <li>Stronger correlation with FEWS NET IPC classifications than individual satellite variables</li>
  <li>ENSO signal clearly captured - La Niña-driven droughts clearly identifiable in the index time series</li>
</ul>
<h2>Why This Matters</h2>
<p>Earlier drought detection means earlier humanitarian response - and in contexts where food insecurity escalates rapidly, weeks matter. Probabilistic indices also give decision-makers uncertainty estimates, not just point predictions. The GHDI is a step toward more operationally useful drought monitoring for one of the world's most climate-vulnerable regions.</p>
