// Opening filter section
document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("pl-search-tag-div");
  const filterSection = document.querySelector(".filter-section-modal");
  const closeBtns = document.querySelectorAll(
    ".filter-section-modal .close-icon"
  );

  searchBtn.addEventListener("click", function () {
    filterSection.classList.remove("hide");
  });

  closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      filterSection.classList.add("hide");
    });
  });
});

// Budget Range
document.addEventListener("DOMContentLoaded", function () {
  const minSlider = document.getElementById("minSlider");
  const maxSlider = document.getElementById("maxSlider");
  const minValueDisplay = document.getElementById("minValue");
  const maxValueDisplay = document.getElementById("maxValue");
  const filtersAppliedContainer = document.querySelector(".filters-applied");

  function convertToAmount(value) {
    if (value <= 100) {
      return `₹${value} Lakh`;
    } else {
      return `₹${(value / 100).toFixed(1)} Crore`;
    }
  }

  function updateSliderValues() {
    minValueDisplay.textContent = convertToAmount(minSlider.value);
    maxValueDisplay.textContent = convertToAmount(maxSlider.value);
    applyRangeFilter();
  }

  function applyRangeFilter() {
    const minAmount = convertToAmount(minSlider.value);
    const maxAmount = convertToAmount(maxSlider.value);
    const filterText = `${minAmount} - ${maxAmount}`;

    removeExistingFilter("range-filter");

    addFilterTag(filterText, null, "range-filter");
  }

  function addFilterTag(text, element, sectionClass) {
    if (sectionClass !== "property-type-section") {
      removeExistingFilter(sectionClass);
    }

    const filterTag = document.createElement("p");
    filterTag.textContent = text;
    filterTag.dataset.section = sectionClass;
    filterTag.classList.add("range-filter");

    const span = document.createElement("span");
    const img = document.createElement("img");
    img.src = "./images/cross-blue.png";
    img.alt = "Remove filter";
    img.width = 20;
    span.appendChild(img);

    filterTag.appendChild(span);
    filtersAppliedContainer.appendChild(filterTag);

    span.addEventListener("click", function () {
      filterTag.remove();
      if (element && element.tagName === "INPUT") {
        element.checked = false;
      }
    });
  }

  function removeExistingFilter(sectionClass) {
    const existingTags = filtersAppliedContainer.querySelectorAll("p");
    existingTags.forEach((tag) => {
      if (tag.dataset.section === sectionClass) {
        tag.remove();
      }
    });
  }

  minSlider.addEventListener("input", function () {
    if (parseInt(minSlider.value) >= parseInt(maxSlider.value)) {
      minSlider.value = maxSlider.value - 1;
    }
    updateSliderValues();
  });

  maxSlider.addEventListener("input", function () {
    if (parseInt(maxSlider.value) <= parseInt(minSlider.value)) {
      maxSlider.value = parseInt(minSlider.value) + 1;
    }
    updateSliderValues();
  });

  updateSliderValues();
});

// Rent Budget Range
document.addEventListener("DOMContentLoaded", function () {
  const minSlider = document.getElementById("rentMinSlider");
  const maxSlider = document.getElementById("rentMaxSlider");
  const minValueDisplay = document.getElementById("rentMinValue");
  const maxValueDisplay = document.getElementById("rentMaxValue");
  const filtersAppliedContainer = document.querySelector(".filters-applied");

  function convertToAmount(value) {
    if (value <= 50000) {
      return `₹${value}`;
    }
  }

  function updateSliderValues() {
    minValueDisplay.textContent = convertToAmount(minSlider.value);
    maxValueDisplay.textContent = convertToAmount(maxSlider.value);
    applyRangeFilter();
  }

  function applyRangeFilter() {
    const minAmount = convertToAmount(minSlider.value);
    const maxAmount = convertToAmount(maxSlider.value);
    const filterText = `${minAmount} - ${maxAmount}`;

    removeExistingFilter("rent-range-filter");

    addFilterTag(filterText, null, "rent-range-filter");
  }

  function addFilterTag(text, element, sectionClass) {
    if (sectionClass !== "property-type-section") {
      removeExistingFilter(sectionClass);
    }

    const filterTag = document.createElement("p");
    filterTag.textContent = text;
    filterTag.dataset.section = sectionClass;
    filterTag.classList.add("rent-range-filter");

    const span = document.createElement("span");
    const img = document.createElement("img");
    img.src = "./images/cross-blue.png";
    img.alt = "Remove filter";
    img.width = 20;
    span.appendChild(img);

    filterTag.appendChild(span);
    filtersAppliedContainer.appendChild(filterTag);

    span.addEventListener("click", function () {
      filterTag.remove();
      if (element && element.tagName === "INPUT") {
        element.checked = false;
      }
    });
  }

  function removeExistingFilter(sectionClass) {
    const existingTags = filtersAppliedContainer.querySelectorAll("p");
    existingTags.forEach((tag) => {
      if (tag.dataset.section === sectionClass) {
        tag.remove();
      }
    });
  }

  minSlider.addEventListener("input", function () {
    if (parseInt(minSlider.value) >= parseInt(maxSlider.value)) {
      minSlider.value = maxSlider.value - 1;
    }
    updateSliderValues();
  });

  maxSlider.addEventListener("input", function () {
    if (parseInt(maxSlider.value) <= parseInt(minSlider.value)) {
      maxSlider.value = parseInt(minSlider.value) + 1;
    }
    updateSliderValues();
  });

  updateSliderValues();
});

// Area Range
document.addEventListener("DOMContentLoaded", function () {
  const minSlider = document.getElementById("areaMinSlider");
  const maxSlider = document.getElementById("areaMaxSlider");
  const minValueDisplay = document.getElementById("areaMinValue");
  const maxValueDisplay = document.getElementById("areaMaxValue");
  const filtersAppliedContainer = document.querySelector(".filters-applied");

  function convertToAmount(value) {
    if (value <= 5000) {
      return `Rs.${value} Sq.Ft`;
    }
  }

  function updateSliderValues() {
    minValueDisplay.textContent = convertToAmount(minSlider.value);
    maxValueDisplay.textContent = convertToAmount(maxSlider.value);
    applyRangeFilter();
  }

  function applyRangeFilter() {
    const minAmount = convertToAmount(minSlider.value);
    const maxAmount = convertToAmount(maxSlider.value);
    const filterText = `${minAmount} - ${maxAmount}`;

    removeExistingFilter("area-range-filter");

    addFilterTag(filterText, null, "area-range-filter");
  }

  function addFilterTag(text, element, sectionClass) {
    if (sectionClass !== "property-type-section") {
      removeExistingFilter(sectionClass);
    }

    const filterTag = document.createElement("p");
    filterTag.textContent = text;
    filterTag.dataset.section = sectionClass;
    filterTag.classList.add("area-range-filter");

    const span = document.createElement("span");
    const img = document.createElement("img");
    img.src = "./images/cross-blue.png";
    img.alt = "Remove filter";
    img.width = 20;
    span.appendChild(img);

    filterTag.appendChild(span);
    filtersAppliedContainer.appendChild(filterTag);

    span.addEventListener("click", function () {
      filterTag.remove();
      if (element && element.tagName === "INPUT") {
        element.checked = false;
      }
    });
  }

  function removeExistingFilter(sectionClass) {
    const existingTags = filtersAppliedContainer.querySelectorAll("p");
    existingTags.forEach((tag) => {
      if (tag.dataset.section === sectionClass) {
        tag.remove();
      }
    });
  }

  minSlider.addEventListener("input", function () {
    if (parseInt(minSlider.value) >= parseInt(maxSlider.value)) {
      minSlider.value = maxSlider.value - 1;
    }
    updateSliderValues();
  });

  maxSlider.addEventListener("input", function () {
    if (parseInt(maxSlider.value) <= parseInt(minSlider.value)) {
      maxSlider.value = parseInt(minSlider.value) + 1;
    }
    updateSliderValues();
  });

  updateSliderValues();
});

// Buy or Rent toggle
document.addEventListener("DOMContentLoaded", function () {
  const buyRentOptions = document.querySelectorAll(".buy-rent-section p");
  const categoryOptions = document.querySelectorAll(".category-section p");

  buyRentOptions.forEach((option) => {
    option.addEventListener("click", function () {
      buyRentOptions.forEach((opt) => opt.classList.remove("active"));

      this.classList.add("active");

      if (this.textContent === "Buy") {
        categoryOptions.forEach((cat) => {
          if (
            cat.getAttribute("data-type") === "pg" ||
            cat.getAttribute("data-type") === "coworking-space"
          ) {
            cat.classList.add("d-none");
          } else {
            cat.classList.remove("d-none");
          }
        });
      } else if (this.textContent === "Rent") {
        categoryOptions.forEach((cat) => {
          if (cat.getAttribute("data-type") === "plots") {
            cat.classList.add("d-none");
          } else {
            cat.classList.remove("d-none");
          }
        });
      }
    });
  });

  categoryOptions.forEach((category) => {
    category.addEventListener("click", function () {
      categoryOptions.forEach((cat) => cat.classList.remove("active"));

      this.classList.add("active");
    });
  });
});

// Change of Property Types
document.addEventListener("DOMContentLoaded", function () {
  const filtersAppliedContainer = document.querySelector(".filters-applied");
  const propertyTypes = {
    Residential: ["Apartment", "Duplex", "Villa", "Penthouse", "Studio"],
    Commercial: [
      "Ready to use office space",
      "Bare shell office space",
      "Shop",
      "Warehouse",
      "Showroom",
    ],
    Plots: ["Residential Plot", "Commercial Plot", "Agricultural Plots"],
    PG: ["Girls", "Boys", "Both"],
    "Co-working space": [],
  };

  const categoryOptions = document.querySelectorAll(".category-section p");
  const propertyTypeList = document.querySelector(".property-type-section ul");
  const propertyTypeTitle = document.querySelector(".property-type-section h6");

  function updatePropertyTypes(category) {
    propertyTypeList.innerHTML = "";

    const types = propertyTypes[category];

    if (types.length === 0) {
      propertyTypeList.innerHTML = "<li>No property types available</li>";
      return;
    }

    if (category === "PG") {
      propertyTypeTitle.textContent = "Gender Type";
    } else {
      propertyTypeTitle.textContent = "Property Type";
    }

    types.forEach((type) => {
      const li = document.createElement("li");
      li.classList.add("d-flex", "align-items-center");
      li.innerHTML = `
          <input type="checkbox" name="property-type">
          <p>${type}</p>
        `;
      if (type === "Commercial Plot") {
        li.addEventListener("click", () => {
          if (li.classList.contains("checked")) {
            li.classList.remove("checked");
            changeMobileFilter(getMobilePropertyStatus, "plots");
          } else {
            li.classList.add("checked");
            changeMobileFilter(getMobilePropertyStatus, "commercial-plots");
          }
        });
      }
      propertyTypeList.appendChild(li);
    });

    reapplyPropertyTypeListeners();
  }

  categoryOptions.forEach((category) => {
    category.addEventListener("click", function () {
      const selectedCategory = this.textContent.trim();
      updatePropertyTypes(selectedCategory);
    });
  });

  updatePropertyTypes("Residential");

  function reapplyPropertyTypeListeners() {
    const propertyTypeSection = document.querySelector(
      ".property-type-section"
    );
    if (propertyTypeSection) {
      const inputs = propertyTypeSection.querySelectorAll(
        "input[type='checkbox'], input[type='radio']"
      );

      inputs.forEach((input) => {
        input.removeEventListener("change", handleCheckboxChange);

        input.addEventListener("change", handleCheckboxChange);
      });
    }
  }

  // Function to handle checkbox changes
  function handleCheckboxChange(event) {
    const input = event.target;
    const labelText = input.nextElementSibling.textContent;
    const sectionClass = "property-type-section";

    if (input.checked) {
      addFilterTag(labelText, input, sectionClass);
    } else {
      removeFilterTag(labelText, sectionClass);
    }
  }

  function removeFilterTag(text, sectionClass) {
    const filtersAppliedContainer = document.querySelector(".filters-applied");
    const existingTags = filtersAppliedContainer.querySelectorAll(
      `p[data-section="${sectionClass}"]`
    );

    existingTags.forEach((tag) => {
      if (tag.textContent.includes(text)) {
        tag.remove();
      }
    });
  }

  function addFilterTag(text, element, sectionClass) {
    if (sectionClass !== "property-type-section") {
      removeExistingFilter(sectionClass);
    }

    const filterTag = document.createElement("p");
    filterTag.textContent = text;
    filterTag.dataset.section = sectionClass;

    const span = document.createElement("span");
    const img = document.createElement("img");
    img.src = "./images/cross-blue.png";
    img.alt = "Remove filter";
    img.width = 20;
    span.appendChild(img);

    filterTag.appendChild(span);
    filtersAppliedContainer.appendChild(filterTag);

    span.addEventListener("click", function () {
      filterTag.remove();
      if (element.tagName === "INPUT") {
        element.checked = false;
      } else if (element.tagName === "P") {
        element.classList.remove("active");
      }
    });
  }

  function removeExistingFilter(sectionClass) {
    const existingTags = filtersAppliedContainer.querySelectorAll("p");
    existingTags.forEach((tag) => {
      if (tag.dataset.section === sectionClass) {
        tag.remove();
      }
    });
  }
});

// Selecing Listing and Facing options
document.addEventListener("DOMContentLoaded", function () {
  function handleActiveClass(container) {
    const pElements = container.querySelectorAll("p");

    pElements.forEach((p) => {
      p.addEventListener("click", function () {
        pElements.forEach((pEl) => pEl.classList.remove("active"));

        this.classList.add("active");
      });
    });
  }

  const listedSection = document.querySelector(".listed-section");
  handleActiveClass(listedSection);

  const facingSection = document.querySelector(".facing-section");
  handleActiveClass(facingSection);

  const furnishingSection = document.querySelector(".furnishing-section");
  handleActiveClass(furnishingSection);

  const saleTypeSection = document.querySelector(".sale-type-section");
  handleActiveClass(saleTypeSection);

  const constructionSection = document.querySelector(".construction-section");
  handleActiveClass(constructionSection);

  const preleaseSection = document.querySelector(".prelease-section");
  handleActiveClass(preleaseSection);

  const propertyDetailsSection = document.querySelector(
    ".property-details-section"
  );
  handleActiveClass(propertyDetailsSection);

  const washroomSection = document.querySelector(".washroom-section");
  handleActiveClass(washroomSection);
});

// Selecting Amenities options
document.addEventListener("DOMContentLoaded", function () {
  function handleActiveClass(container) {
    const pElements = container.querySelectorAll("p");

    pElements.forEach((p) => {
      p.addEventListener("click", function () {
        this.classList.add("active");
      });
    });
  }

  const amenitiesSection = document.querySelector(".amenities-section");
  handleActiveClass(amenitiesSection);
  const commercialAmenitiesSection = document.querySelector(
    ".commercial-amenities-section"
  );
  handleActiveClass(commercialAmenitiesSection);
  const pgAmenitiesSection = document.querySelector(".pg-amenities-section");
  handleActiveClass(pgAmenitiesSection);
});

// Filters being applied
document.addEventListener("DOMContentLoaded", function () {
  const filtersAppliedContainer = document.querySelector(".filters-applied");

  function removeExistingFilter(sectionClass) {
    const existingTags = filtersAppliedContainer.querySelectorAll("p");
    existingTags.forEach((tag) => {
      if (tag.dataset.section === sectionClass) {
        tag.remove();
      }
    });
  }

  function addFilterTag(text, element, sectionClass) {
    if (
      sectionClass !== "property-type-section" &&
      sectionClass != "amenities-section" &&
      sectionClass !== "bhk-section" &&
      sectionClass !== "bathroom-section" &&
      sectionClass !== "lease-section" &&
      sectionClass !== "open-sides-section" &&
      sectionClass !== "zone-section" &&
      sectionClass !== "ownership-section" &&
      sectionClass !== "commercial-amenities-section" &&
      sectionClass !== "availability-section" &&
      sectionClass !== "pg-amenities-section" &&
      sectionClass !== "room-section" &&
      sectionClass !== "food-section" &&
      sectionClass !== "seats-section" &&
      sectionClass !== "lock-section" &&
      sectionClass !== "space-section"
    ) {
      removeExistingFilter(sectionClass);
    }

    const filterTag = document.createElement("p");
    filterTag.textContent = text;
    filterTag.dataset.section = sectionClass;

    const span = document.createElement("span");
    const img = document.createElement("img");
    img.src = "./images/cross-blue.png";
    img.alt = "Remove filter";
    img.width = 20;
    span.appendChild(img);

    filterTag.appendChild(span);
    filtersAppliedContainer.appendChild(filterTag);

    span.addEventListener("click", function () {
      filterTag.remove();
      if (element.tagName === "INPUT") {
        element.checked = false;
      } else if (element.tagName === "P") {
        element.classList.remove("active");
      }
    });
  }

  function handleSectionClick(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
    if (!section) {
      return;
    }

    const pElements = section.querySelectorAll("p");
    const inputs = section.querySelectorAll(
      "input[type='checkbox'], input[type='radio']"
    );

    const amenities = document.querySelector(".amenities-section p");

    pElements.forEach((p) => {
      p.addEventListener("click", function () {
        if (!amenities) {
          pElements.forEach((pEl) => pEl.classList.remove("active"));
        }
        p.classList.add("active");
        addFilterTag(p.textContent, p, sectionClass);
      });
    });

    inputs.forEach((input) => {
      input.addEventListener("change", function () {
        console.log("Input changed:", input.nextElementSibling.textContent);
        const labelText = input.nextElementSibling.textContent;
        addFilterTag(labelText, input, sectionClass);
      });
    });
  }

  const searchIcon = document.querySelector(".search-engine img");
  const searchInput = document.querySelector(
    ".search-engine input[type='text']"
  );

  if (searchIcon && searchInput) {
    searchIcon.addEventListener("click", function () {
      const searchText = searchInput.value.trim();
      if (searchText) {
        addFilterTag(searchText, searchInput, "search-section");
        searchInput.value = "";
      }
    });
  }

  handleSectionClick("posession-section");
  handleSectionClick("listed-section");
  handleSectionClick("furnishing-section");
  handleSectionClick("bhk-section");
  handleSectionClick("verified-section");
  handleSectionClick("bathroom-section");
  handleSectionClick("rera-section");
  handleSectionClick("sale-type-section");
  handleSectionClick("possession-stage-section");
  handleSectionClick("amenities-section");
  handleSectionClick("facing-section");
  handleSectionClick("property-age-section");
  handleSectionClick("lease-section");
  handleSectionClick("construction-section");
  handleSectionClick("property-details-section");
  handleSectionClick("open-sides-section");
  handleSectionClick("zone-section");
  handleSectionClick("ownership-section");
  handleSectionClick("commercial-amenities-section");
  handleSectionClick("prelease-section");
  handleSectionClick("availability-section");
  handleSectionClick("pg-amenities-section");
  handleSectionClick("room-section");
  handleSectionClick("food-section");
  handleSectionClick("seats-section");
  handleSectionClick("lock-section");
  handleSectionClick("space-section");
  handleSectionClick("washroom-section");

  const clearFilterBtn = document.getElementById("clear-filter");
  if (clearFilterBtn) {
    clearFilterBtn.addEventListener("click", function () {
      console.log("Clear filters clicked");
      filtersAppliedContainer.innerHTML = "";
      const inputs = document.querySelectorAll(
        "input[type='checkbox'], input[type='radio']"
      );
      inputs.forEach((input) => (input.checked = false));
      const activePs = document.querySelectorAll("p.active");
      activePs.forEach((p) => p.classList.remove("active"));
    });
  }
});

// Expanding advanced filters
document.addEventListener("DOMContentLoaded", function () {
  const advancedFilterBtn = document.querySelector(".advanced-filter-header");
  const advancedFilterSection = document.querySelector(
    ".advanced-filter-section"
  );
  const dropdown = document.querySelector(".advanced-filter-header svg");

  advancedFilterBtn.addEventListener("click", function () {
    advancedFilterSection.classList.toggle("show");
    dropdown.classList.toggle("rotate");
  });
});

// Function to get the currently selected type
function getMobilePropertyType() {
  const activeTab = document.querySelector(".category-section p.active");
  return activeTab ? activeTab.getAttribute("data-type") : null;
}

// Function to get the currently selected status
function getMobilePropertyStatus() {
  const activeButton = document.querySelector(".buy-rent-section p.active");
  return activeButton ? activeButton.textContent.toLowerCase() : null;
}

function changeMobileFilter(status, type) {
  const budget = document.querySelector(".budget-section");
  const budgetRange = document.querySelector(".range-filter");
  const rentBudget = document.querySelector(".rent-budget-section");
  const rentBudgetRange = document.querySelector(".rent-range-filter");
  const saleType = document.querySelector(".sale-type-section");
  const possessionStage = document.querySelector(".posession-section");
  const rera = document.querySelector(".rera-section");
  const facing = document.querySelector(".facing-section");
  const listedBy = document.querySelector(".listed-section");
  const leaseType = document.querySelector(".lease-section");
  const bhk = document.querySelector(".bhk-section");
  const furnishing = document.querySelector(".furnishing-section");
  const propertyDetails = document.querySelector(".property-details-section");
  const construction = document.querySelector(".construction-section");
  const bathroom = document.querySelector(".bathroom-section");
  const propertyAge = document.querySelector(".property-age-section");
  const openSide = document.querySelector(".open-sides-section");
  const zone = document.querySelector(".zone-section");
  const ownership = document.querySelector(".ownership-section");
  const verified = document.querySelector(".verified-section");
  const amenities = document.querySelector(".amenities-section");
  const commercialAmenities = document.querySelector(
    ".commercial-amenities-section"
  );
  const prelease = document.querySelector(".prelease-section");
  const availability = document.querySelector(".availability-section");
  const pgAmenities = document.querySelector(".pg-amenities-section");
  const area = document.querySelector(".area-section");
  const areaRange = document.querySelector(".area-range-filter");
  const foodType = document.querySelector(".food-section");
  const roomType = document.querySelector(".room-section");
  const propertyType = document.querySelector(".property-type-section");
  const seats = document.querySelector(".seats-section");
  const lockInPeriod = document.querySelector(".lock-section");
  const spaceAccess = document.querySelector(".space-section");
  const washroom = document.querySelector(".washroom-section");

  if (status === "rent") {
    budget.classList.add("d-none");
    budgetRange.classList.add("d-none");
    rentBudget.classList.remove("d-none");
    rentBudgetRange.style.display = "block";
    saleType.classList.add("d-none");
  } else {
    budget.classList.remove("d-none");
    budgetRange.classList.remove("d-none");
    rentBudget.classList.add("d-none");
    rentBudgetRange.style.display = "none";
    saleType.classList.remove("d-none");
  }

  if (status === "rent" || type === "commercial") {
    rera.classList.add("d-none");
  } else {
    rera.classList.remove("d-none");
  }

  if (status === "rent" && type === "residential") {
    leaseType.classList.remove("d-none");
  } else {
    leaseType.classList.add("d-none");
  }

  if (
    status === "rent" &&
    (type === "residential" || type === "pg" || type === "coworking-space")
  ) {
    listedBy.classList.add("d-none");
  } else {
    listedBy.classList.remove("d-none");
  }

  if (type === "plots" || type === "commercial-plots") {
    propertyDetails.classList.remove("d-none");
    construction.classList.remove("d-none");
    openSide.classList.remove("d-none");
  } else {
    propertyDetails.classList.add("d-none");
    construction.classList.add("d-none");
    openSide.classList.add("d-none");
  }

  if (
    type === "commercial" ||
    type === "plots" ||
    type === "commercial-plots" ||
    type === "pg" ||
    type === "coworking-space"
  ) {
    bhk.classList.add("d-none");
    bathroom.classList.add("d-none");
    propertyAge.classList.add("d-none");
  } else {
    bhk.classList.remove("d-none");
    bathroom.classList.remove("d-none");
    propertyAge.classList.remove("d-none");
  }

  if (
    type === "commercial" ||
    type === "plots" ||
    type === "commercial-plots" ||
    type === "pg"
  ) {
    furnishing.classList.add("d-none");
  } else {
    furnishing.classList.remove("d-none");
  }

  if (type === "commercial-plots") {
    zone.classList.remove("d-none");
    ownership.classList.remove("d-none");
  } else {
    zone.classList.add("d-none");
    ownership.classList.add("d-none");
  }

  if (
    type === "plots" ||
    type === "commercial-plots" ||
    type === "commercial" ||
    (status === "rent" && type === "residential")
  ) {
    possessionStage.classList.add("d-none");
  } else {
    possessionStage.classList.remove("d-none");
  }

  if (
    (type === "commercial" && status === "rent") ||
    status === "buy" ||
    type === "pg" ||
    (type === "coworking-space" && status === "rent")
  ) {
    verified.classList.add("d-none");
    facing.classList.add("d-none");
  } else {
    verified.classList.remove("d-none");
    facing.classList.remove("d-none");
  }

  if (status === "buy" && type === "commercial") {
    prelease.classList.remove("d-none");
    possessionStage.classList.remove("d-none");
  } else {
    prelease.classList.add("d-none");
    possessionStage.classList.add("d-none");
  }

  if (
    status === "rent" &&
    (type === "commercial" || type === "coworking-space")
  ) {
    availability.classList.remove("d-none");
  } else {
    availability.classList.add("d-none");
  }

  if (
    type === "commercial" ||
    type === "coworking-space" ||
    type === "commercial-plots" ||
    type === "pg"
  ) {
    amenities.classList.add("d-none");
  } else {
    amenities.classList.remove("d-none");
  }

  if (type === "pg") {
    pgAmenities.classList.remove("d-none");
    areaRange.classList.add("d-none");
    foodType.classList.remove("d-none");
    roomType.classList.remove("d-none");
  } else {
    pgAmenities.classList.add("d-none");
    areaRange.classList.remove("d-none");
    foodType.classList.add("d-none");
    roomType.classList.add("d-none");
  }

  if (type === "coworking-space" || type === "commercial-plots") {
    commercialAmenities.classList.remove("d-none");
  } else {
    commercialAmenities.classList.add("d-none");
  }

  if (type === "coworking-space" || type === "pg") {
    area.classList.add("d-none");
  } else {
    area.classList.remove("d-none");
  }

  if (type === "coworking-space") {
    propertyType.classList.add("d-none");
    seats.classList.remove("d-none");
    lockInPeriod.classList.remove("d-none");
    spaceAccess.classList.remove("d-none");
    washroom.classList.remove("d-none");
  } else {
    propertyType.classList.remove("d-none");
    seats.classList.add("d-none");
    lockInPeriod.classList.add("d-none");
    spaceAccess.classList.add("d-none");
    washroom.classList.add("d-none");
  }
}
