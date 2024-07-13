<?php

namespace App\Entity;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;

#[Entity]
class Nap
{
    #[Column(name: 'id', type: 'integer')]
    #[GeneratedValue(strategy: 'IDENTITY')]
    #[Id]
    private int $id;

    #[Column(name: 'length', type: 'integer')]
    private int $length;

    public function __construct(
        int $length
    ) {
        $this->id = 0;
        $this->length = $length;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getLength(): int
    {
        return $this->length;
    }
}
