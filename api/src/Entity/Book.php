<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource]
#[ORM\Entity]
class Book
{
  #[ORM\Id]
  #[ORM\Column]
  #[ORM\GeneratedValue]
  private ?int $id = null;

  #[ORM\Column]
  public string $title = "";

  public function getId(): ?int
  {
    return $this->id;
  }
}
