---
title: "Validating Ocean Models with In Situ Data: Lessons from My Deltares Internship"
date: 2024-10-01
tags: ["Hydrodynamics", "Python", "Earth Observation"]
description: "How you actually check whether a state-of-the-art hydrodynamic model is telling the truth - and what I learned building a validation framework at Deltares."
readTime: 7
---

<p>Hydrodynamic models are everywhere in climate science, coastal engineering, and flood risk assessment. But how do you know if a model is actually right? That's the question I spent my internship at Deltares working on - building a systematic validation framework for Delft3D Flexible Mesh (FM) ocean models.</p>
<h2>What Deltares Does</h2>
<p>Deltares is a Dutch applied research institute specialising in water, subsurface, and infrastructure. Their Delft3D suite is one of the most widely used hydrodynamic modelling frameworks in the world - used for everything from flood forecasting to offshore engineering design. The FM variant handles flexible, unstructured grids that can represent complex coastal geometries much better than older rectangular grid models.</p>
<h2>The Validation Problem</h2>
<p>A model validation framework needs to answer a deceptively simple question: how well does the model reproduce reality? In practice, this requires collecting in situ observations (tide gauge data, current meter records, CTD casts), defining appropriate skill metrics, aligning temporal and spatial scales between model output and observations, and automating the whole process so it can run across multiple model runs and time periods.</p>
<blockquote>The hardest part of model validation isn't the statistics - it's the data engineering. Getting observations and model output to speak the same language is where most of the work lives.</blockquote>
<h2>Technical Stack</h2>
<p>The entire framework was built in Python - primarily xarray for handling NetCDF model output, pandas for observation time series, and matplotlib/cartopy for spatial visualisation. The most challenging part was handling the spatial interpolation needed to compare model output at grid cell centres with point observations from buoys and tide gauges.</p>
<ul>
  <li>xarray + scipy.interpolate for spatial matching between model grids and in situ locations</li>
  <li>Taylor diagrams for visualising model skill across multiple stations simultaneously</li>
  <li>Automated HTML report generation for routine model runs</li>
</ul>
<h2>What I Took Away</h2>
<p>Beyond the technical skills, the internship showed me how scientific software is developed in a large applied research organisation - the importance of reproducibility, documentation, and building tools that other scientists can actually use without reading 200 lines of your undocumented code first.</p>
