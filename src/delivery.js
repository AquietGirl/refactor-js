const rulesIsRush = [
  {
    match: function (deliveryState) {
      return ["MA", "CT"].includes(deliveryState);
    },
    action: function () {
      return 1
    }
  }, {
    match: function (deliveryState) {
      return ["NY", "NH"].includes(deliveryState);
    },
    action: function () {
      return 2
    }
  }, {
    match: function (deliveryState) {
      return true;
    },
    action: function () {
      return 3
    }
  }
];
const rulesIsNotRush = [
  {
    match: function (deliveryState) {
      return ["MA", "CT", "NY"].includes(deliveryState);
    },
    action: function () {
      return 2;
    }
  }, {
    match: function (deliveryState) {
      return ["ME", "NH"].includes(deliveryState);
    },
    action: function () {
      return 3;
    },
  }, {
    match: function (deliveryState) {
      return true;
    },
    action: function () {
      return 4;
    }
  }
];

function getDeliveryTimeByRush(anOrder) {
    let deliveryTime;
    for (rule of rulesIsRush) {
      if (rule.match(anOrder.deliveryState)) {
        deliveryTime = rule.action();
        break
      }
    }
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function getDeliveryTimeByNotRush(anOrder) {
    let deliveryTime;
    for (rule of rulesIsNotRush) {
        if (rule.match(anOrder.deliveryState)) {
            deliveryTime = rule.action();
            break;
        }
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
}

function deliveryDate(anOrder, isRush) {
    return isRush ? getDeliveryTimeByRush(anOrder) : getDeliveryTimeByNotRush(anOrder);
}

module.exports = {
    deliveryDate,
};
