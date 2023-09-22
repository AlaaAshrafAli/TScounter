class Counte {
  private value : number;

  constructor() {
      this.value = 0;
      this.update();
  }

  public increase(): void {
      this.value++;
      this.update();
  }

  public decrease(): void {
      this.value--;
      this.update();
  }

  public reset(): void {
      this.value = 0;
      this.update();
  }

  public update(): void {
      document.getElementById("displayCount")!.innerHTML = this.value.toString();
  }
}
const counte = new Counter();

      document.getElementById("increase")?.addEventListener("click", function() {
          counter.increase();
      });

      document.getElementById("decrease")?.addEventListener("click", function() {
          counter.decrease();
      });

      document.getElementById("reset")?.addEventListener("click", function() {
          counter.reset();
      });
      counter.update();
  