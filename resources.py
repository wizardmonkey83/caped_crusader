## Manages Batman’s core resources, such as health, reputation, and gadgets.

class Resources:
    def __init__(self, health=100, service_points=0, reputation=0):
        self.health = health
        self.reputation = reputation
        self.service_points = service_points
        self.gadgets = {
            "Batarang": 1,
            "Martial Arts": "skill",
            "UV light": "unlimited",
            "Audio Analyzer": "unlimited",
            "Evidence Bag": "limited capacity"

        }
        
def enemy_encounter(self, num_enemies, use_martial_arts=False, hold_batarang=False):
    base_damage = 5
    self.reputation += 10
    self.service_points += 10
    if use_martial_arts and "martial_arts" in self.gadgets:
        damage_per_enemy = base_damage - 2.5
    else:
        damage_per_enemy = base_damage

    if hold_batarang and "batarang" in self.gadgets and self.gadgets["batarang"] > 0:
            num_enemies -= 1
            self.gadgets["batarang"] -= 1

    total_damage = damage_per_enemy * num_enemies
    self.update_health(- total_damage)

    print(num_enemies + " hostiles neutralized")
    if "martial_arts" in self.gadgets:
        print("Health lost: " + total_damage + ", armbar was used to subdue attacker")
        print("Health remaining: " + self.health)
    else:
        print("Health lost " + total_damage)

def update_health(self, amount):
    self.health += amount
    if self.health <= 0:
        print("The night is darkest just before the dawn. Game Over")

        stop_game = "yes"
    elif self.health > 100:
        self.health = 100

def purchase_gadget(self, gadget_name, cost=10):
    if self.service_points >= cost:
        self.service_points -= 10
        self.gadgets[gadget_name] = self.gadgets.get(gadget_name, "unlimited")
        print(gadget_name + " has been purchased.")
    elif self.service_points < cost:
        print("Not enough service points. ")

def display_status(self):
    print("Health: " + self.health)
    print("Reputation: " + self.reputation)
    print("Service points: " + self.service_points)
    print("Gadgets: " + self.gadgets)


