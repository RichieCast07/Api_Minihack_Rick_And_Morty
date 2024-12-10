import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { rickmorty } from '../../interfaces/rickmorty.interface';
import { RickMortyService } from '../../services/rickmorty.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() id: number | null = null;
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  origin: rickmorty = {
    id: 0,
    name: '',
    type: '',
    dimension: '',
  };

  constructor(private rickmorty: RickMortyService) {}

  ngOnInit(): void {
    if (this.id !== null) {
      this.rickmorty.getSingleLocation(this.id).subscribe({
        next: (response) => {
          this.origin = response;
        },
        error: (err) => {
          console.error('Error fetching location:', err);
        },
      });
    } else {
      console.error('ID no proporcionado para obtener la ubicación');
    }
  }

  onClose(): void {
    this.cancel.emit();
  }

  onAddFavorites(): void {
    this.confirm.emit();
  }
}
