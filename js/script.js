// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates Volume of Sphere
 */
function calculateVolumeOfSphere() {
  // input
  const radius = parseInt(document.getElementById('radius-mm').value)
  const pNumber = 3.14;

  // process
  const VolumeOfSphere = 4 / 3 * pNumber * (radius * radius * radius)

  // output
  document.getElementById('volume').innerHTML = 'Volume is ' + VolumeOfSphere + ' mm'
}
