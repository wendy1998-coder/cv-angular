const table = $("#datatable").DataTable();

$('#clear_filters').on('click', function() {
  $('input[name="filter_type"]').each(function () {
    if (this.checked) {
      this.checked = false
    }
  })
  $('input[name="filter_level"]').each(function () {
    if (this.checked) {
      this.checked = false
    }
  })
  $('input[name="filter_origin"]').each(function () {
    if (this.checked) {
      this.checked = false
    }
  })

  filterDatatable([0], [0], [0])
})

$('#apply_filters').on('click', function() {
  const $type_filters_checked = $('input[name="filter_type"]:checked')
  let allowedTypes = [$type_filters_checked.length]
  if ($type_filters_checked.length > 0) {
    let i = 0
    $($type_filters_checked).each(function () {
      if (this.id === "hard_type") {
        allowedTypes[i] = "H hard"
      } else {
        allowedTypes[i] = "S soft"
      }
      i++
    })
  }

  const $level_filters_checked = $('input[name="filter_level"]:checked')
  let allowedLevels = [$level_filters_checked.length]
  if ($level_filters_checked.length > 0) {
    let i = 0
    $($level_filters_checked).each(function () {
      let id = this.id;
      let level;
      switch (id) {
        case "beginner_level":
          level = "beginner"
          break
        case "middle1_level":
          level = "beginner intermediate"
          break
        case "intermediate_level":
          level = "intermediate"
          break
        case "middle2_level":
          level = "intermediate advanced"
          break
        case "advanced_level":
          level = "advanced"
      }

      allowedLevels[i] = level
      i++
    })
  }

  const $origin_filters_checked = $('input[name="filter_origin"]:checked')
  let allowedOrigins = [$origin_filters_checked.length]
  if ($origin_filters_checked.length > 0) {
    let i = 0
    $($origin_filters_checked).each(function () {
      let id = this.id;
      let origin;
      switch (id) {
        case "bachelor_ori":
          origin = "bachelor hanze"
          break
        case "honours_ori":
          origin = "honours"
          break
        case "professional_ori":
          origin = "professional"
          break
      }

      allowedOrigins[i] = origin
      i++
    })
  }

  filterDatatable(allowedTypes, allowedLevels, allowedOrigins)
})


function filterDatatable(allowedTypes, allowedLevels, allowedOrigins) {
  if (allowedTypes[0] !== 0 || allowedLevels[0] !== 0 || allowedOrigins[0] !== 0) {
    $.fn.dataTable.ext.search.push(
      function (settings, data) {
        let data_passed = true
        if (allowedLevels[0] !== 0) {
          data_passed = allowedLevels.includes(data[1].trim());
        }
        if (data_passed && allowedTypes[0] !== 0) {
          data_passed = allowedTypes.includes(data[2].trim());
        }
        if (data_passed && allowedOrigins[0] !== 0) {
          data_passed = allowedOrigins.includes(data[0].trim());
        }

        return data_passed
      }
    );
  }

  table.draw();

  if (allowedTypes[0] !== 0 || allowedLevels[0] !== 0 || allowedOrigins[0] !== 0) {
    $.fn.dataTable.ext.search.pop();
  }

}
